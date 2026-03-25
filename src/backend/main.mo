import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Integrate user system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Contact Submission types
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    // Sort by most recent timestamp first
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Int.compare(s2.timestamp, s1.timestamp);
    };
  };

  // Loan Application types
  type LoanType = {
    #personal;
    #home;
    #auto;
    #business;
    #education;
    #other;
  };

  type LoanApplication = {
    name : Text;
    email : Text;
    phone : Text;
    loanType : LoanType;
    amount : Nat;
    message : Text;
    timestamp : Time.Time;
  };

  module LoanApplication {
    public func compare(a1 : LoanApplication, a2 : LoanApplication) : Order.Order {
      Int.compare(a2.timestamp, a1.timestamp);
    };
  };

  // Persistent state for contact submissions and loan applications
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  let loanApplications = Map.empty<Nat, LoanApplication>();

  // Persistent counters for next IDs
  var nextContactId = 1;
  var nextLoanId = 1;

  // Contact Form Submission
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async {
    id : Nat;
    timestamp : Time.Time;
  } {
    let id = nextContactId;
    nextContactId += 1;

    let timestamp = Time.now();

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp;
    };

    contactSubmissions.add(id, submission);

    { id; timestamp };
  };

  // Loan Application Submission
  public shared ({ caller }) func submitLoanApplication(name : Text, email : Text, phone : Text, loanType : LoanType, amount : Nat, message : Text) : async {
    id : Nat;
    timestamp : Time.Time;
  } {
    let id = nextLoanId;
    nextLoanId += 1;

    let timestamp = Time.now();

    let application : LoanApplication = {
      name;
      email;
      phone;
      loanType;
      amount;
      message;
      timestamp;
    };

    loanApplications.add(id, application);

    { id; timestamp };
  };

  // Admin-only function to get all contact submissions (most recent first)
  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view contact submissions");
    };

    contactSubmissions.values().toArray().sort();
  };

  // Admin-only function to get all loan applications (most recent first)
  public query ({ caller }) func getAllLoanApplications() : async [LoanApplication] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view loan applications");
    };

    loanApplications.values().toArray().sort();
  };

  // Get specific contact submission
  public query ({ caller }) func getContactSubmission(id : Nat) : async ContactSubmission {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view contact submissions");
    };

    switch (contactSubmissions.get(id)) {
      case (null) { Runtime.trap("Contact submission not found") };
      case (?submission) { submission };
    };
  };

  // Get specific loan application
  public query ({ caller }) func getLoanApplication(id : Nat) : async LoanApplication {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view loan applications");
    };

    switch (loanApplications.get(id)) {
      case (null) { Runtime.trap("Loan application not found") };
      case (?application) { application };
    };
  };

  // Get loan applications by email (for follow-ups)
  public query ({ caller }) func getLoanApplicationsByEmail(email : Text) : async [LoanApplication] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view loan applications");
    };

    loanApplications.values().toArray().filter(
      func(a) { a.email == email }
    ).sort();
  };

  // Search contact submissions by name (admin only)
  public query ({ caller }) func searchContactSubmissionsByName(name : Text) : async [ContactSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can search contact submissions");
    };

    contactSubmissions.values().toArray().filter(
      func(s) { s.name.contains(#text name) }
    ).sort();
  };

  // Aggregate function: Count of total contact submissions (admin only)
  public query ({ caller }) func getContactSubmissionCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view contact submission count");
    };

    contactSubmissions.size();
  };

  // Aggregate function: Count of loan applications by type (admin only)
  public query ({ caller }) func getLoanApplicationCountByType(loanType : LoanType) : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Only admins can view loan application count");
    };

    var count = 0;
    for (application in loanApplications.values()) {
      if (application.loanType == loanType) {
        count += 1;
      };
    };
    count;
  };
};
