import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import neetData from '../../../../data/exams/neet.json';

interface NEETData {
  "Overview": {
    "ExamName": string;
    "ConductingBody": string;
    "ExamLevel": string;
    "ExamMode": string;
    "ApproxAnnualTestTakers": string;
    "ScoreValidity": string;
  };
  "ImportantDates": {
    "NotificationAndApplicationStart": string;
    "ApplicationLastDate": string;
    "CorrectionWindow": string;
    "CityIntimationSlip": string;
    "AdmitCardRelease": string;
    "ExamDate": string;
    "ProvisionalAnswerKey": string;
    "ResultDeclaration": string;
    "Counselling": string;
    "DocumentVerification": string;
  };
  "DetailedTimeline": {
    "NotificationPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "ApplicationPhase": {
      "title": string;
      "startDate": string;
      "endDate": string;
      "description": string;
    };
    "CorrectionPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "CityIntimationPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "AdmitCardPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "ExamPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "AnswerKeyPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "ResultPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "CounsellingPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
    "DocumentVerificationPhase": {
      "title": string;
      "date": string;
      "description": string;
    };
  };
  "AdditionalImportantInformation": {
    "PreparationTips": string[];
    "ExamDayGuidelines": string[];
    "ApplicationTips": string[];
    "CounsellingPreparation": string[];
    "CommonMistakes": string[];
    "EmergencyContacts": {
      "NTAHelpline": string;
      "Email": string;
      "Website": string;
      "MCCHelpline": string;
      "MCCEmail": string;
    };
    "FeeStructure": {
      "ApplicationFee": {
        "General": string;
        "OBC": string;
        "SC/ST/PwD": string;
        "Foreign": string;
      };
      "CounsellingFee": {
        "MCC": string;
        "StateCounselling": string;
      };
      "CollegeFees": {
        "MBBS": string;
        "BDS": string;
        "BAMS": string;
      };
    };
    "ReservationDetails": {
      "AllIndiaQuota": string;
      "StateQuota": string;
      "Categories": {
        "SC": string;
        "ST": string;
        "OBC": string;
        "EWS": string;
        "PwD": string;
      };
      "SpecialReservations": {
        "Defence": string;
        "JammuKashmir": string;
        "NorthEast": string;
      };
    };
    "SeatDistribution": {
      "TotalMBBSSeats": string;
      "GovernmentSeats": string;
      "PrivateSeats": string;
      "DeemedUniversities": string;
      "CentralUniversities": string;
    };
  };
  "ComprehensiveTimeline": {
    "NotificationPhase": {
      "title": string;
      "description": string;
    };
    "ApplicationProcess": {
      "title": string;
      "description": string;
    };
    "CorrectionWindow": {
      "title": string;
      "description": string;
    };
    "CityIntimation": {
      "title": string;
      "description": string;
    };
    "AdmitCardRelease": {
      "title": string;
      "description": string;
    };
    "ExamDay": {
      "title": string;
      "description": string;
    };
    "AnswerKeyPhase": {
      "title": string;
      "description": string;
    };
    "ResultDeclaration": {
      "title": string;
      "description": string;
    };
  "CounsellingProcess": {
    "title": string;
    "description": string;
  };
  "Counselling": {
    "QuotaDistribution": {
      "AllIndiaQuota": string;
      "StateQuota": string;
    };
    "ConductedBy": string;
    "Rounds": string[];
    "Process": string[];
    "ComprehensiveCounsellingGuide"?: {
      "Introduction": {
        "title": string;
        "description": string;
      };
      "QuotaDistributionAndSeatReservations": {
        "title": string;
        "quotas": Array<{
          "quotaCategory": string;
          "percentage": string;
          "areasCovered": string;
        }>;
      };
      "CounsellingConductingAuthorities": {
        "title": string;
        "authorities": Array<{
          "authority": string;
          "responsibilities": string[];
        }>;
      };
      "CounsellingRoundsAndTheirSignificance": {
        "title": string;
        "description": string;
        "rounds": Array<{
          "roundName": string;
          "description": string;
        }>;
        "importantNotes": string[];
      };
      "StepByStepCounsellingProcess": {
        "title": string;
        "steps": Array<{
          "step": string;
          "description": string;
        }>;
      };
      "ImportantDocumentsForCounselling": {
        "title": string;
        "documents": Array<{
          "document": string;
          "purpose": string;
        }>;
      };
      "FeeStructureOverview": {
        "title": string;
        "feeStructure": Array<{
          "counsellingType": string;
          "generalOBCFee": string;
          "scStPwdFee": string;
          "securityDeposit": string;
        }>;
      };
      "KeyCounsellingTipsForCandidates": {
        "title": string;
        "tips": string[];
      };
      "DistinctionBetweenAllIndiaQuotaAndStateQuotaCounselling": {
        "title": string;
        "distinctions": Array<{
          "aspect": string;
          "allIndiaQuota": string;
          "stateQuota": string;
        }>;
      };
      "DetailedCounsellingTimeline": {
        "title": string;
        "timeline": Array<{
          "phase": string;
          "duration": string;
          "activities": string[];
        }>;
      };
      "StateWiseCounsellingDetails": {
        "title": string;
        "states": Array<{
          "state": string;
          "conductingAuthority": string;
          "website": string;
          "specialFeatures": string;
        }>;
      };
      "CounsellingStrategiesAndTips": {
        "title": string;
        "strategies": Array<{
          "category": string;
          "tips": string[];
        }>;
      };
      "CommonCounsellingMistakes": {
        "title": string;
        "mistakes": Array<{
          "mistake": string;
          "consequence": string;
          "prevention": string;
        }>;
      };
      "CounsellingHelplineAndSupport": {
        "title": string;
        "supportChannels": Array<{
          "authority": string;
          "helpline": string;
          "email": string;
          "workingHours": string;
        }>;
        "onlineResources": string[];
      };
      "PostCounsellingProcess": {
        "title": string;
        "steps": Array<{
          "step": string;
          "description": string;
        }>;
      };
    };
  };
    "DocumentVerification": {
      "title": string;
      "description": string;
    };
  };
  "DetailedPreparationGuide": {
    "PreparationTips": string[];
    "ExamDayGuidelines": string[];
    "ApplicationBestPractices": string[];
    "CounsellingPreparation": string[];
    "CommonMistakes": string[];
  };
  "EmergencyContactsTable": {
    "NTA": {
      "Authority": string;
      "Helpline": string;
      "Email": string;
      "Website": string;
    };
    "MCC": {
      "Authority": string;
      "Helpline": string;
      "Email": string;
      "Website": string;
    };
  };
  "FeeStructureTable": {
    "ApplicationFees": Array<{"Category": string; "Fee": string}>;
    "CounsellingFees": Array<{"Type": string; "Fee": string}>;
    "AnnualTuitionFees": Array<{"Course": string; "Fee": string}>;
  };
  "ReservationTable": {
    "QuotaDistribution": Array<{"Category": string; "Percentage": string}>;
    "CategoryReservations": Array<{"Category": string; "Percentage": string}>;
  };
  "SeatDistributionTable": {
    "MBBSSeats": Array<{"Type": string; "Seats": string}>;
  };
  "EligibilityCriteria": {
    "Nationality": string;
    "MinimumAge": string;
    "UpperAgeLimit": string;
    "Education": string;
    "MinimumMarks": {
      "General": string;
      "OBC/SC/ST": string;
      "PwD": string;
    };
    "NumberOfAttempts": string;
  };
  "DetailedEligibilityCriteria": {
    "NationalityAndCitizenship": {
      "title": string;
      "description": string;
      "categories": string[];
    };
    "AgeRequirements": {
      "title": string;
      "minimumAge": {
        "requirement": string;
        "description": string;
      };
      "upperAgeLimit": {
        "requirement": string;
        "description": string;
      };
      "ageCalculation": string;
    };
    "EducationalQualifications": {
      "title": string;
      "description": string;
      "requirements": string[];
    };
    "MinimumMarksRequired": {
      "title": string;
      "categories": Array<{
        "category": string;
        "requirement": string;
      }>;
      "additionalNotes": string[];
    };
    "YearOfPassingAndAttempts": {
      "title": string;
      "yearOfPassing": string;
      "numberOfAttempts": string;
    };
    "QualifyingCodes": {
      "title": string;
      "description": string;
      "codes": Array<{
        "code": string;
        "description": string;
      }>;
      "note": string;
    };
    "SpecialCategories": {
      "title": string;
      "points": string[];
    };
    "DomicileAndStateQuotas": {
      "title": string;
      "points": string[];
    };
    "SummaryTable": {
      "title": string;
      "criteria": Array<{
        "criteria": string;
        "details": string;
      }>;
    };
    "ImportantAdditionalNotes": {
      "title": string;
      "points": string[];
    };
  };
  "InDepthEligibilityCriteria": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "NationalityAndCitizenshipCriteria": {
      "title": string;
      "description": string;
      "categories": string[];
      "note": string;
    };
    "AgeRequirementsDetailed": {
      "title": string;
      "minimumAge": {
        "requirement": string;
        "practicalMeaning": string;
        "purpose": string;
      };
      "upperAgeLimit": {
        "requirement": string;
        "policyChange": string;
      };
      "ageVerification": {
        "domestic": string;
        "foreign": string;
      };
    };
    "EducationalQualificationsDetailed": {
      "title": string;
      "basicRequirement": string;
      "practicalExams": string;
      "mandatorySubjects": string[];
      "specialCases": string[];
    };
    "MinimumRequiredMarksDetailed": {
      "title": string;
      "categories": Array<{
        "category": string;
        "requirement": string;
      }>;
      "importantNotes": string[];
    };
    "YearOfPassingAndAttemptsDetailed": {
      "title": string;
      "yearOfPassing": string;
      "numberOfAttempts": string;
      "flexibility": string;
      "purpose": string;
    };
    "QualifyingCodesDetailed": {
      "title": string;
      "description": string;
      "codes": Array<{
        "code": string;
        "description": string;
      }>;
      "importantNote": string;
    };
    "SpecialConsiderations": {
      "title": string;
      "points": string[];
    };
    "DomicileAndReservationPolicies": {
      "title": string;
      "description": string;
      "quotaDistribution": Array<{
        "quota": string;
        "description": string;
      }>;
      "additionalRequirements": string[];
    };
    "SummaryTableDetailed": {
      "title": string;
      "criteria": Array<{
        "criteria": string;
        "details": string;
      }>;
    };
    "AdditionalImportantNotesDetailed": {
      "title": string;
      "points": string[];
    };
  };
  "ApplicationProcess": {
    "Mode": string;
    "Timeline": string;
    "ApplicationFee": {
      "General": string;
      "OBC": string;
      "SC/ST/Reserved": string;
      "Foreign": string;
    };
  };
  "DetailedApplicationProcess": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "Step1Registration": {
      "title": string;
      "steps": string[];
    };
    "Step2ApplicationForm": {
      "title": string;
      "description": string;
      "sections": Array<{
        "section": string;
        "details": string;
      }>;
      "importantNote": string;
    };
    "Step3DocumentUpload": {
      "title": string;
      "description": string;
      "documents": Array<{
        "document": string;
        "specifications": string;
      }>;
      "warning": string;
    };
    "Step4FeePayment": {
      "title": string;
      "description": string;
      "importantNotes": string[];
      "feeStructure": Array<{
        "category": string;
        "fee": string;
      }>;
    };
    "Step5ReviewSubmission": {
      "title": string;
      "steps": string[];
    };
    "PostSubmissionCorrection": {
      "title": string;
      "description": string;
      "importantNotes": string[];
    };
    "ImportantTips": {
      "title": string;
      "tips": string[];
    };
    "DocumentsChecklist": {
      "title": string;
      "documents": string[];
    };
    "ImportantDeadlines": {
      "title": string;
      "deadlines": Array<{
        "step": string;
        "date": string;
      }>;
    };
    "FAQs": {
      "title": string;
      "faqs": Array<{
        "question": string;
        "answer": string;
      }>;
    };
  };
  "ExhaustiveApplicationProcess": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "ApplicationModeAndPortal": {
      "title": string;
      "points": string[];
    };
    "TimelineForApplication": {
      "title": string;
      "timeline": Array<{
        "stage": string;
        "date": string;
        "details": string;
      }>;
    };
    "Step1RegistrationDetailed": {
      "title": string;
      "steps": string[];
    };
    "Step2ApplicationFormDetailed": {
      "title": string;
      "description": string;
      "sections": Array<{
        "section": string;
        "description": string;
      }>;
      "importantNote": string;
    };
    "Step3DocumentUploadDetailed": {
      "title": string;
      "description": string;
      "documents": Array<{
        "document": string;
        "format": string;
        "size": string;
        "notes": string;
      }>;
      "uploadTips": string[];
    };
    "Step4FeePaymentDetailed": {
      "title": string;
      "description": string;
      "feeStructure": Array<{
        "category": string;
        "fee": string;
      }>;
      "paymentMethods": string[];
      "importantNotes": string[];
    };
    "Step5ReviewSubmissionDetailed": {
      "title": string;
      "steps": string[];
    };
    "PostSubmissionCorrectionDetailed": {
      "title": string;
      "description": string;
      "amendableFields": string[];
      "importantNotes": string[];
    };
    "CommonChallengesAndSolutions": {
      "title": string;
      "challenges": Array<{
        "challenge": string;
        "solution": string;
      }>;
    };
    "BestPractices": {
      "title": string;
      "practices": string[];
    };
    "DocumentsChecklistDetailed": {
      "title": string;
      "documents": string[];
    };
    "ApplicationFAQsDetailed": {
      "title": string;
      "faqs": Array<{
        "question": string;
        "answer": string;
      }>;
    };
  };
  "ExamPattern": {
    "TotalQuestions": number;
    "Subjects": string[];
    "QuestionsPerSubject": number;
    "TotalMarks": number;
    "MarkingScheme": string;
    "ExamDuration": string;
    "LanguageOptions": string[];
  };
  "DetailedExamPattern": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "GeneralStructure": {
      "title": string;
      "features": Array<{
        "feature": string;
        "detail": string;
      }>;
    };
    "SectionWiseDistribution": {
      "title": string;
      "description": string;
      "sections": Array<{
        "subject": string;
        "sectionA": string;
        "sectionB": string;
        "total": string;
      }>;
      "note": string;
    };
    "DetailedSubjectWiseWeightage": {
      "title": string;
      "subjects": Array<{
        "subject": string;
        "class11Topics": string;
        "class12Topics": string;
        "difficultyLevel": string;
      }>;
    };
    "MarkingBreakdownAndScoringLogic": {
      "title": string;
      "markingScheme": Array<{
        "responseType": string;
        "marksAwarded": string;
      }>;
      "scoringDetails": string[];
    };
    "LanguageOptionsAndCodeMapping": {
      "title": string;
      "description": string;
      "languages": Array<{
        "language": string;
        "availableCenters": string;
        "paperCodeFormat": string;
      }>;
      "importantNotes": string[];
    };
    "ExamLogisticsAndAdministration": {
      "title": string;
      "points": string[];
    };
    "QuestionDifficultyAnalysis": {
      "title": string;
      "difficultyBreakdown": Array<{
        "difficultyLevel": string;
        "physics": string;
        "chemistry": string;
        "biology": string;
      }>;
      "note": string;
    };
    "SyllabusBasis": {
      "title": string;
      "description": string;
    };
    "SubjectProportionWithMarksWeightage": {
      "title": string;
      "subjects": Array<{
        "subject": string;
        "questions": string;
        "marks": string;
        "percentage": string;
      }>;
    };
    "ResultAndScoringInsights": {
      "title": string;
      "points": string[];
    };
  };
  "ExtendedExamPatternInsights": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "GeneralExamStructureRecap": {
      "title": string;
      "features": string[];
    };
    "ChapterWiseWeightageOverview": {
      "title": string;
      "description": string;
    };
    "PhysicsChapterWeightage": {
      "title": string;
      "chapters": Array<{
        "chapter": string;
        "questions": string;
        "weightage": string;
      }>;
      "note": string;
    };
    "ChemistryChapterWeightage": {
      "title": string;
      "description": string;
      "chapters": Array<{
        "chapter": string;
        "questions": string;
        "weightage": string;
      }>;
    };
    "BiologyChapterWeightage": {
      "title": string;
      "description": string;
      "botanyChapters": Array<{
        "chapter": string;
        "questions": string;
        "weightage": string;
      }>;
      "zoologyChapters": Array<{
        "chapter": string;
        "questions": string;
        "weightage": string;
      }>;
    };
    "AdditionalNEET2026ExamInsights": {
      "title": string;
      "syllabusUpdatesAndTips": {
        "title": string;
        "points": string[];
      };
      "strategicPreparationTips": {
        "title": string;
        "points": string[];
      };
      "examDayInstructions": {
        "title": string;
        "points": string[];
      };
    };
  };
  "Syllabus": {
    "BasedOn": string;
    "Notes": string;
  };
  "ComprehensiveSyllabusGuide": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "SyllabusStructureOverview": {
      "title": string;
      "subjects": Array<{
        "subject": string;
        "chapters": string;
        "questions": string;
        "weightage": string;
      }>;
      "note": string;
    };
    "DetailedSubjectWiseTopicsBreakdown": {
      "title": string;
      "physicsSyllabus": {
        "title": string;
        "class11Topics": string;
        "class12Topics": string;
        "keyInsights": string;
      };
      "chemistrySyllabus": {
        "title": string;
        "class11Topics": string;
        "class12Topics": string;
        "importantNote": string;
      };
      "biologySyllabus": {
        "title": string;
        "class11Topics": string;
        "class12Topics": string;
        "keyInsights": string;
      };
    };
    "ChangesInSyllabusAndExamPattern": {
      "title": string;
      "changes": string[];
    };
    "PreparationFocusAreas": {
      "title": string;
      "areas": string[];
    };
    "LanguageAndMedium": {
      "title": string;
      "description": string;
    };
    "SummaryTableOfKeyChapters": {
      "title": string;
      "subjects": Array<{
        "subject": string;
        "importantTopics": string;
      }>;
    };
  };
  "InDepthComprehensiveSyllabusGuide": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "SyllabusStructureAtAGlance": {
      "title": string;
      "subjects": Array<{
        "subject": string;
        "chapters": string;
        "questions": string;
        "weightage": string;
      }>;
      "note": string;
    };
    "DetailedSubjectWiseTopicsBreakdown": {
      "title": string;
      "physicsSyllabus": {
        "title": string;
        "class11Topics": string[];
        "class12Topics": string[];
        "examFocus": string;
      };
      "chemistrySyllabus": {
        "title": string;
        "class11Topics": string[];
        "class12Topics": string[];
        "notableOmissions": string;
      };
      "biologySyllabus": {
        "title": string;
        "class11Topics": string[];
        "class12Topics": string[];
        "examFocus": string;
      };
    };
    "ImportantSyllabusUpdatesForNEET2026": {
      "title": string;
      "updates": string[];
    };
    "ExamAndPreparationHighlights": {
      "title": string;
      "highlights": string[];
    };
    "LanguageMediumAndExamFormat": {
      "title": string;
      "description": string;
    };
    "SampleInDepthChapterListings": {
      "title": string;
      "chapters": string[];
    };
  };
  "ExpectedCutoff2026": {
    "General/UR": {
      "Percentile": string;
      "CutoffMarks": string;
    };
    "OBC/SC/ST": {
      "Percentile": string;
      "CutoffMarks": string;
    };
    "Gen-PwD": {
      "Percentile": string;
      "CutoffMarks": string;
    };
    "OBC/SC/ST-PwD": {
      "Percentile": string;
      "CutoffMarks": string;
    };
  };
  "DetailedCutoffAnalysis": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "WhatIsNEETCutoff": {
      "title": string;
      "points": string[];
    };
    "CutoffPercentilesAndMarksByCategory": {
      "title": string;
      "categories": Array<{
        "category": string;
        "percentile": string;
        "cutoffMarks": string;
        "additionalNotes": string;
      }>;
    };
    "FactorsAffectingNEET2026Cutoff": {
      "title": string;
      "factors": string[];
    };
    "HistoricalCutoffTrends": {
      "title": string;
      "years": Array<{
        "year": string;
        "generalCutoff": string;
        "obcScStCutoff": string;
        "pwdCutoff": string;
      }>;
      "note": string;
    };
    "CutoffPercentileExplanation": {
      "title": string;
      "explanations": string[];
    };
    "ExpectedCutoffDistributionBreakdown": {
      "title": string;
      "categories": Array<{
        "category": string;
        "description": string;
      }>;
    };
    "ScoringStrategyToClearCutoff": {
      "title": string;
      "strategies": string[];
    };
    "NEET2026CutoffVsRankEstimations": {
      "title": string;
      "rankEstimations": Array<{
        "marksRange": string;
        "estimatedRank": string;
      }>;
    };
    "FinalNotes": {
      "title": string;
      "notes": string[];
    };
  };
  "SeatsAvailability": {
    "MBBS": number;
    "BDS": number;
    "BAMS": number;
    "BVSc&AH": number;
    "AYUSH/Paramedical": string;
  };
  "ComprehensiveSeatsGuide": {
    "Introduction": {
      "title": string;
      "description": string;
    };
    "TotalSeatsAvailability": {
      "title": string;
      "courses": Array<{
        "course": string;
        "totalSeats": string;
        "remarks": string;
      }>;
    };
    "MBBSSeatsDetailedBreakdown": {
      "title": string;
      "overview": {
        "totalMBBSSeats": string;
        "numberOfMedicalColleges": string;
        "distribution": {
          "governmentColleges": string;
          "privateAndDeemedUniversities": string;
          "aiimsAndJipmer": string;
          "esicAfmcOtherCentral": string;
        };
      };
      "stateWiseHighestMBBSSeats": Array<{
        "state": string;
        "seats": string;
      }>;
      "smallerStatesAndUTs": Array<{
        "state": string;
        "seats": string;
      }>;
    };
    "BDSSeatsAvailability": {
      "title": string;
      "description": string;
    };
    "AYUSHSeats": {
      "title": string;
      "breakdown": Array<{
        "course": string;
        "seats": string;
        "description"?: string;
      }>;
    };
    "ReservationPolicy": {
      "title": string;
      "categories": Array<{
        "category": string;
        "percentage": string;
        "reservationType": string;
      }>;
      "explanation": {
        "verticalReservation": string;
        "horizontalReservation": string;
      };
    };
    "SeatQuotaDivisions": {
      "title": string;
      "quotas": Array<{
        "quota": string;
        "percentage": string;
        "description": string;
      }>;
    };
    "RecentTrendsInSeatIncrease": {
      "title": string;
      "trends": string[];
    };
    "SeatAvailabilityImpactOnAdmission": {
      "title": string;
      "impacts": string[];
    };
    "SummaryTable": {
      "title": string;
      "seatTypes": Array<{
        "seatType": string;
        "percentage": string;
        "approximateSeats": string;
      }>;
    };
    "AdditionalInsights": {
      "title": string;
      "insights": string[];
    };
  };
  "Counselling": {
    "QuotaDistribution": {
      "AllIndiaQuota": string;
      "StateQuota": string;
    };
    "ConductedBy": string;
    "Rounds": string[];
    "Process": string[];
  };
  "ReservationPolicy": {
    "SC": string;
    "ST": string;
    "OBC(NCL)": string;
    "EWS": string;
    "PwD": string;
  };
  "QuickReference": {
    "ConductedBy": string;
    "UndergradCourses": string[];
    "TotalApplicants": string;
    "TotalMBBSSeats": string;
    "NoOfTestCities": {
      "India": number;
      "Abroad": string;
    };
    "ScoreValidity": string;
    "OfficialWebsites": string[];
  };
}

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling' | 'seats';

export default function NEETPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [data, setData] = useState<NEETData | null>(null);

  useEffect(() => {
    setData(neetData as NEETData);
  }, []);

  if (!data) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'application', label: 'Application' },
    { id: 'pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'cutoff', label: 'Cutoff' },
    { id: 'counselling', label: 'Counselling' },
    { id: 'seats', label: 'Seats' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* What is NEET 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What is NEET 2026?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  NEET or National Eligibility Cum Entrance Test is conducted by NTA (National Testing Agency) to allow eligible candidates to get admission to various medical courses like MBBS, BDS, BAMS, BHMS, BUMS, etc courses. Candidates are examined in the NEET based on the syllabus for Physics, Chemistry, and Biology for classes 11th and 12th.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Historical Background</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• NEET was introduced in 2013 by MCC, and the first NEET exam was conducted on May 5, 2013</li>
                    <li>• In July 2013, the examination was cancelled by the Supreme Court of India, and NEET was discontinued</li>
                    <li>• In 2014 and 2015, AIPMT was conducted for admission to Medical courses across the country</li>
                    <li>• Later in 2016, NEET was reintroduced, and this time, it was conducted by the Central Board of Secondary Education (CBSE)</li>
                    <li>• 2017 onwards, NEET replaced AIPMT, AIIMS, JIPMER, and other state-level medical entrance examinations</li>
                    <li>• After 2019, the National Testing Agency (NTA) has been responsible for conducting the NEET examination</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NEET 2026 Key Statistics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Key Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Total Registrations</h3>
                  <p className="text-gray-600 font-bold text-2xl">23,00,000+</p>
                  <p className="text-gray-700 text-sm">Candidates register annually</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Participating Colleges</h3>
                  <p className="text-gray-600 font-bold text-2xl">780</p>
                  <p className="text-gray-700 text-sm">Medical colleges</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Total MBBS Seats</h3>
                  <p className="text-gray-600 font-bold text-2xl">1,18,148</p>
                  <p className="text-gray-700 text-sm">Available across India</p>
                </div>
              </div>
            </div>

            {/* NEET 2026 Eligibility Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Eligibility Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Academic Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600">Minimum 50% marks in Physics, Chemistry, and Biology (45% for SC/ST/OBC & 40% for PWD)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600">Must have cleared class 12th in PCB stream or equivalent</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600">Age requirement: At least 17 years as of 31 December 2026</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Application Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600">Fill application form with personal, academic, and address details</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600">Pay application fee: ₹1,700 (₹1,600 for GEN-EWS/OBC-NCL & ₹1,000 for SC/ST/PwBD/PwD/Third Gender)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600">Registration expected to commence in February 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates for NEET 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates for NEET 2026</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Notification & Application Start</h3>
                  <p className="text-gray-600 font-medium">First week, Feb 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Application Last Date</h3>
                  <p className="text-gray-600 font-medium">First week, Mar 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Correction Window</h3>
                  <p className="text-gray-600 font-medium">Third week, Mar 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">City Intimation Slip</h3>
                  <p className="text-gray-600 font-medium">Fourth week, Apr 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Admit Card Release</h3>
                  <p className="text-gray-600 font-medium">First week, May 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Exam Date</h3>
                  <p className="text-gray-600 font-medium">3 May 2026 (Sunday)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Provisional Answer Key</h3>
                  <p className="text-gray-600 font-medium">Last week, May 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Result Declaration</h3>
                  <p className="text-gray-600 font-medium">Second/Third week, Jun 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Counselling</h3>
                  <p className="text-gray-600 font-medium">July–Aug 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Document Verification</h3>
                  <p className="text-gray-600 font-medium">As per counselling schedule</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Timeline for NEET 2026</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Notification & Application Start (First week of February 2026)</h3>
                  <p className="text-gray-600">The NTA officially announces NEET 2026 about 3 months before exam day. The detailed Information Bulletin is released on the official portal (neet.nta.nic.in), outlining crucial exam policies, eligibility norms, syllabus, exam pattern, application steps, fee structure, and instructions. Candidates registering for the first time must create their profile on the candidate portal. The application window opens for about 4-5 weeks, allowing ample time for form filling. Early registration is advised to avoid last-minute server issues.</p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">NEET 2026 Application Process (February to March 2026)</h3>
                  <p className="text-gray-600">Candidates fill demographic details, academic records (Class 10, 12), contact details, and exam preferences. Upload formats: Recent passport-size photo (10-200 KB), signature (4-30 KB) – scanned as per guidelines. Application fee payment is mandatory at this stage. Both online and offline modes (challan facility) may be provided, but digital payment is faster and encouraged.</p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Application Correction Window (Third week of March 2026)</h3>
                  <p className="text-gray-600">NTA provides a 3-5 day window to correct details such as name spelling, date of birth, community category, disability status, exam centre city preference, mobile number, and photograph/signature upload errors. The correction facility will not allow alterations in exam subjects or mode, so initial form filling must be done with utmost care.</p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">NEET 2026 Exam Date (Sunday, May 3, 2026)</h3>
                  <p className="text-gray-600">Exam is conducted nationwide and in select international centers simultaneously. Duration is strictly 3 hours (usually 2:00 PM to 5:00 PM IST). No electronic gadgets, calculators, watches, or stationery other than a black ballpoint pen are allowed inside exam halls. Candidates should reach their centers an hour early, follow seating arrangements, and obey invigilation rules.</p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Result Declaration & Final Answer Key (Second/Third week of June 2026)</h3>
                  <p className="text-gray-600">The NEET result is declared via scorecards downloadable from the official portal with individual total marks, sectional marks, percentile rank, All India Rank (AIR), and qualification status. The qualifying cutoff percentiles vary each year per category but typically range from 50th percentile for General to lower percentiles for reserved categories.</p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Medical Counselling Process (July to August 2026)</h3>
                  <p className="text-gray-600">The Medical Counselling Committee (MCC) handles the All India Quota (15%) centralized counselling, deemed universities, AIIMS, JIPMER, and ESIC institutes. State Authorities conduct separate counselling for 85% State Quota seats. Counselling includes registration, submission of preferences and choices, provisional seat allotments, seat acceptance fee payment, document verification, and final seat confirmation.</p>
                </div>
              </div>
            </div>

            {/* Detailed Preparation Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Preparation Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Preparation Tips</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Begin preparation at least 12-18 months ahead of NEET date for conceptual clarity</li>
                    <li>• Focus on NCERT textbooks for Physics, Chemistry, and Biology as the exam closely follows these</li>
                    <li>• Practice previous years' papers and mock tests consistently to improve speed, accuracy, and exam temperament</li>
                    <li>• Create a well-balanced timetable including revision and breaks to avoid burnout</li>
                    <li>• Enroll in reputed coaching or online structured courses for expert guidance</li>
                    <li>• Stay informed on biological sciences advancements and current affairs related to medicine and healthcare</li>
                    <li>• Take care of physical and mental health through proper diet, sleep, and relaxation techniques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Exam Day Guidelines</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Arrive at exam center at least 60 minutes before reporting time to complete entry formalities</li>
                    <li>• Carry only essential items: NEET admit card, valid photo ID, transparent water bottle, and personal hand sanitizers if allowed</li>
                    <li>• Follow strict dress code: Light-colored, half-sleeved tops without buttons or metallic accessories</li>
                    <li>• Mobile phones, watches, calculators, study materials, papers, and bags are strictly prohibited inside the exam hall</li>
                    <li>• Use only blue or black ballpoint pens for marking OMR responses</li>
                    <li>• Maintaining silence and cooperating with invigilators is mandatory for smooth conduct</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fee Structure and Important Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Fee Structure & Important Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Application Fees</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">General:</span>
                      <span className="text-gray-600">₹1,700</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">OBC:</span>
                      <span className="text-gray-600">₹1,600</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">SC/ST/PwD:</span>
                      <span className="text-gray-600">₹1,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Foreign:</span>
                      <span className="text-gray-600">₹9,500</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">College Fees (Annual)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">MBBS:</span>
                      <span className="text-gray-600">₹10,000 - ₹25 lakhs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">BDS:</span>
                      <span className="text-gray-600">₹5,000 - ₹15 lakhs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">BAMS:</span>
                      <span className="text-gray-600">₹50,000 - ₹5 lakhs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NEET 2026 Exam Pattern */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Exam Pattern</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Subject-wise Distribution</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Physics:</span>
                      <span className="text-gray-600">45 questions</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Chemistry:</span>
                      <span className="text-gray-600">45 questions</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Biology:</span>
                      <span className="text-gray-600">90 questions</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Total:</span>
                      <span className="text-gray-600 font-bold">180 questions</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Marking Scheme</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Correct Answer:</span>
                      <span className="text-gray-600 font-bold">+4 marks</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Incorrect Answer:</span>
                      <span className="text-gray-600 font-bold">-1 mark</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Duration:</span>
                      <span className="text-gray-600">180 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Maximum Score:</span>
                      <span className="text-gray-600 font-bold">720 marks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Offered After NEET 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Courses Offered After NEET 2026</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  NEET Exam is a pre-medical entrance test conducted nationwide by NTA for admission to various Medical and Dental courses. As per the MCC official website, there are a total of 780 medical colleges offering 118148 MBBS seats across the country.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-800">MBBS</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-800">BDS</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-800">BAMS</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-800">BHMS</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-800">BUMS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">NTA Support</h3>
                  <p className="text-gray-600 mb-2"><strong>Helpline:</strong> 0120-6895200</p>
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> neet@nta.ac.in</p>
                  <p className="text-gray-600"><strong>Website:</strong> https://neet.nta.nic.in</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">MCC Support</h3>
                  <p className="text-gray-600 mb-2"><strong>Helpline:</strong> 011-22041807</p>
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> mcc.nic.in</p>
                  <p className="text-gray-600"><strong>Website:</strong> https://mcc.nic.in</p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            {data.DetailedEligibilityCriteria && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Eligibility Criteria</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Nationality and Citizenship</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Indian Nationals, NRIs, OCIs, PIOs, and Foreign Nationals are eligible</li>
                      <li>• Indian Nationals: No domicile restrictions for All India Quota</li>
                      <li>• NRIs/OCIs: Must have valid documents and follow specific admission procedures</li>
                      <li>• Foreign Nationals: Must have valid visa and follow MCI guidelines</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Age Requirements</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong>Minimum Age:</strong> 17 years as of December 31, 2026</p>
                      <p className="text-gray-700"><strong>Maximum Age:</strong> No upper age limit (removed in 2022)</p>
                      <p className="text-gray-700"><strong>Age Proof:</strong> Class 10 certificate or birth certificate</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Educational Qualifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Class 12 Requirements</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Must have passed Class 12 or equivalent</li>
                          <li>• Physics, Chemistry, Biology/Biotechnology as core subjects</li>
                          <li>• English as a subject (compulsory)</li>
                          <li>• Mathematics is not mandatory</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Minimum Marks Required</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• General: 50% in PCB combined</li>
                          <li>• SC/ST/OBC: 40% in PCB combined</li>
                          <li>• PwD: 45% in PCB combined</li>
                          <li>• Must be obtained in first attempt</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Application Process */}
            {data.DetailedApplicationProcess && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Application Process</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Registration</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Visit neet.nta.nic.in and click "New Registration"</li>
                        <li>• Enter personal details: Name, DOB, Gender, Category, Nationality</li>
                        <li>• Create password and security questions</li>
                        <li>• Note down Application Number for future reference</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Application Form</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Full name as per Class 10 certificate</li>
                          <li>• Father's and Mother's name</li>
                          <li>• Date of birth</li>
                          <li>• Gender and Category</li>
                          <li>• Nationality and State of domicile</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Academic Details</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Class 10 and 12 details</li>
                          <li>• Board name and passing year</li>
                          <li>• Roll number and percentage</li>
                          <li>• School/College name and address</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Document Upload</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Recent passport-size photograph (10-200 KB)</li>
                        <li>• Scanned signature (4-30 KB)</li>
                        <li>• Category certificate (if applicable)</li>
                        <li>• PwD certificate (if applicable)</li>
                        <li>• Domicile certificate (for state quota)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Fee Payment</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Fee Structure</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-700"><strong>General:</strong> ₹1,700</p>
                          <p className="text-gray-700"><strong>OBC:</strong> ₹1,600</p>
                        </div>
                        <div>
                          <p className="text-gray-700"><strong>SC/ST/PwD:</strong> ₹1,000</p>
                          <p className="text-gray-700"><strong>Foreign:</strong> ₹9,500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Exam Pattern */}
            {data.DetailedExamPattern && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Exam Pattern</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">General Structure</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-600">180</p>
                          <p className="text-gray-700">Total Questions</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-600">720</p>
                          <p className="text-gray-700">Maximum Marks</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-600">180</p>
                          <p className="text-gray-700">Minutes Duration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Section-wise Distribution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Physics</h4>
                        <p className="text-2xl font-bold text-gray-600">45</p>
                        <p className="text-gray-700">Questions</p>
                        <p className="text-gray-700">180 Marks</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Chemistry</h4>
                        <p className="text-2xl font-bold text-gray-600">45</p>
                        <p className="text-gray-700">Questions</p>
                        <p className="text-gray-700">180 Marks</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Biology</h4>
                        <p className="text-2xl font-bold text-gray-600">90</p>
                        <p className="text-gray-700">Questions</p>
                        <p className="text-gray-700">360 Marks</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Marking Scheme</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-600">+4</p>
                          <p className="text-gray-700">Correct Answer</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-600">-1</p>
                          <p className="text-gray-700">Incorrect Answer</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-600">0</p>
                          <p className="text-gray-700">Unattempted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Syllabus */}
            {data.ComprehensiveSyllabusGuide && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Syllabus Guide</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Syllabus Structure Overview</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-4">The NEET 2026 syllabus is based on NCERT Class 11 and 12 curriculum for Physics, Chemistry, and Biology. The syllabus is designed to test conceptual understanding, application skills, and analytical abilities.</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-600">20</p>
                          <p className="text-gray-700">Physics Chapters</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-600">27</p>
                          <p className="text-gray-700">Chemistry Chapters</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-600">52</p>
                          <p className="text-gray-700">Biology Chapters</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Subject-wise Topics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Physics</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Physical world and measurement</li>
                          <li>• Kinematics and laws of motion</li>
                          <li>• Work, energy and power</li>
                          <li>• Thermodynamics</li>
                          <li>• Electrostatics and current electricity</li>
                          <li>• Magnetism and electromagnetic induction</li>
                          <li>• Optics and modern physics</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Chemistry</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Basic concepts of chemistry</li>
                          <li>• Atomic structure and bonding</li>
                          <li>• Thermodynamics and equilibrium</li>
                          <li>• Organic chemistry basics</li>
                          <li>• Biomolecules and polymers</li>
                          <li>• Environmental chemistry</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Biology</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Diversity in living world</li>
                          <li>• Cell structure and function</li>
                          <li>• Plant and animal physiology</li>
                          <li>• Genetics and evolution</li>
                          <li>• Human reproduction and health</li>
                          <li>• Ecology and environment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cutoff Analysis */}
            {data.DetailedCutoffAnalysis && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Cutoff Analysis</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Expected Cutoff Percentiles and Marks by Category</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">General/UR</h4>
                        <p className="text-2xl font-bold text-gray-600">50th</p>
                        <p className="text-gray-700">Percentile</p>
                        <p className="text-gray-700">711-135 marks</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">OBC/SC/ST</h4>
                        <p className="text-2xl font-bold text-gray-600">40th</p>
                        <p className="text-gray-700">Percentile</p>
                        <p className="text-gray-700">134-107 marks</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Gen-PwD</h4>
                        <p className="text-2xl font-bold text-gray-600">45th</p>
                        <p className="text-gray-700">Percentile</p>
                        <p className="text-gray-700">133-120 marks</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">OBC/SC/ST-PwD</h4>
                        <p className="text-2xl font-bold text-gray-600">40th</p>
                        <p className="text-gray-700">Percentile</p>
                        <p className="text-gray-700">119-107 marks</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Factors Affecting NEET 2026 Cutoff</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Number of candidates appearing for the exam</li>
                        <li>• Difficulty level of the question paper</li>
                        <li>• Seat availability in medical colleges</li>
                        <li>• Reservation policies and category-wise distribution</li>
                        <li>• Normalization process for multiple exam sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Counselling Guide */}
            {data.Counselling?.ComprehensiveCounsellingGuide && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Counselling Guide</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Quota Distribution and Seat Reservations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">All India Quota (AIQ)</h4>
                        <p className="text-2xl font-bold text-gray-600">15%</p>
                        <p className="text-gray-700">of total seats</p>
                        <p className="text-gray-700 text-sm">Conducted by MCC</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">State Quota</h4>
                        <p className="text-2xl font-bold text-gray-600">85%</p>
                        <p className="text-gray-700">of total seats</p>
                        <p className="text-gray-700 text-sm">Conducted by State Authorities</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Counselling Rounds</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Round 1</h4>
                        <p className="text-gray-700">First allotment based on merit</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Round 2</h4>
                        <p className="text-gray-700">Upgradation opportunities</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Mop-up</h4>
                        <p className="text-gray-700">Vacant seat filling</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">Stray Vacancy</h4>
                        <p className="text-gray-700">Final round for remaining seats</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Important Documents for Counselling</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Essential Documents</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• NEET Admit Card</li>
                            <li>• NEET Scorecard/Rank Letter</li>
                            <li>• Class 10 & 12 Certificates</li>
                            <li>• Category Certificate (if applicable)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Additional Documents</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• PwD Certificate (if applicable)</li>
                            <li>• Domicile Certificate</li>
                            <li>• ID Proof (Aadhar/Passport)</li>
                            <li>• Passport-sized Photographs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Seats Guide */}
            {data.ComprehensiveSeatsGuide && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Seats Guide</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Seats Availability Across Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">MBBS</h4>
                        <p className="text-2xl font-bold text-gray-600">127,906</p>
                        <p className="text-gray-700">Total Seats</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">BDS</h4>
                        <p className="text-2xl font-bold text-gray-600">27,868</p>
                        <p className="text-gray-700">Total Seats</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">BAMS</h4>
                        <p className="text-2xl font-bold text-gray-600">52,720</p>
                        <p className="text-gray-700">Total Seats</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Reservation Policy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">SC</h4>
                        <p className="text-xl font-bold text-gray-600">15%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">ST</h4>
                        <p className="text-xl font-bold text-gray-600">7.5%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">OBC</h4>
                        <p className="text-xl font-bold text-gray-600">27%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">EWS</h4>
                        <p className="text-xl font-bold text-gray-600">10%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">PwD</h4>
                        <p className="text-xl font-bold text-gray-600">5%</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Seat Quota Divisions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">All India Quota (AIQ)</h4>
                        <p className="text-2xl font-bold text-gray-600">15%</p>
                        <p className="text-gray-700">of total seats</p>
                        <p className="text-gray-700 text-sm">Conducted by MCC</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">State Quota</h4>
                        <p className="text-2xl font-bold text-gray-600">85%</p>
                        <p className="text-gray-700">of total seats</p>
                        <p className="text-gray-700 text-sm">Conducted by State Authorities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            {/* Quick Dates Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates for NEET 2026</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Notification & Application Start</span>
                      <span className="text-blue-600 font-semibold">{data.ImportantDates.NotificationAndApplicationStart}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Application Last Date</span>
                      <span className="text-red-600 font-semibold">{data.ImportantDates.ApplicationLastDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Correction Window</span>
                      <span className="text-orange-600 font-semibold">{data.ImportantDates.CorrectionWindow}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">City Intimation Slip</span>
                      <span className="text-yellow-600 font-semibold">{data.ImportantDates.CityIntimationSlip}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Admit Card Release</span>
                      <span className="text-green-600 font-semibold">{data.ImportantDates.AdmitCardRelease}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Exam Date</span>
                      <span className="text-purple-600 font-semibold">{data.ImportantDates.ExamDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Provisional Answer Key</span>
                      <span className="text-pink-600 font-semibold">{data.ImportantDates.ProvisionalAnswerKey}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Result Declaration</span>
                      <span className="text-indigo-600 font-semibold">{data.ImportantDates.ResultDeclaration}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Counselling</span>
                      <span className="text-teal-600 font-semibold">{data.ImportantDates.Counselling}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium text-gray-700">Document Verification</span>
                      <span className="text-gray-600 font-semibold">{data.ImportantDates.DocumentVerification}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Timeline for NEET 2026</h2>
              <div className="space-y-6">
                {/* Timeline phases */}
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.NotificationPhase.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.NotificationPhase.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.ApplicationProcess.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.ApplicationProcess.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.CorrectionWindow.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.CorrectionWindow.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.CityIntimation.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.CityIntimation.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.AdmitCardRelease.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.AdmitCardRelease.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.ExamDay.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.ExamDay.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.AnswerKeyPhase.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.AnswerKeyPhase.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.ResultDeclaration.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.ResultDeclaration.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.CounsellingProcess.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.CounsellingProcess.description}</p>
                  </div>

                  <div className="border-l-4 border-gray-800 pl-4 py-3 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.ComprehensiveTimeline.DocumentVerification.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{data.ComprehensiveTimeline.DocumentVerification.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Preparation Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Preparation Guide</h2>
              
              {/* Preparation Tips */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.DetailedPreparationGuide.PreparationTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Day Guidelines */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Day Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.DetailedPreparationGuide.ExamDayGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Best Practices */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Best Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.DetailedPreparationGuide.ApplicationBestPractices.map((practice, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counselling Preparation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Preparation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.DetailedPreparationGuide.CounsellingPreparation.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Common Mistakes to Avoid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.DetailedPreparationGuide.CommonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{mistake}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Contacts Table */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Contacts and Support</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Authority</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Helpline Number</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Email</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">{data.EmergencyContactsTable.NTA.Authority}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.EmergencyContactsTable.NTA.Helpline}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.EmergencyContactsTable.NTA.Email}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.EmergencyContactsTable.NTA.Website}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">{data.EmergencyContactsTable.MCC.Authority}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.EmergencyContactsTable.MCC.Helpline}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.EmergencyContactsTable.MCC.Email}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.EmergencyContactsTable.MCC.Website}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fee Structure Tables */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Fee Structure</h2>
              
              {/* Application Fees Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Application Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.FeeStructureTable.ApplicationFees.map((fee, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">{fee.Category}</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{fee.Fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Counselling Fees Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Counselling Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee (INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.FeeStructureTable.CounsellingFees.map((fee, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">{fee.Type}</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{fee.Fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Annual Tuition Fees Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Annual Tuition Fees</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Annual Fee Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.FeeStructureTable.AnnualTuitionFees.map((fee, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{fee.Course}</td>
                          <td className="border border-gray-300 px-4 py-2">{fee.Fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reservation Details Tables */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reservation Details</h2>
              
              {/* Quota Distribution Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Quota Distribution</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage of Seats</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ReservationTable.QuotaDistribution.map((quota, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">{quota.Category}</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{quota.Percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category Reservations Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Category Reservations</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ReservationTable.CategoryReservations.map((reservation, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">{reservation.Category}</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{reservation.Percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Seat Distribution Table */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Total Seats Estimate (MBBS)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Number of Seats</th>
                      </tr>
                    </thead>
                  <tbody>
                    {data.SeatDistributionTable.MBBSSeats.map((seat, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{seat.Type}</td>
                        <td className="border border-gray-300 px-4 py-2">{seat.Seats}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Important Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Important Information</h2>
              
              {/* Preparation Tips */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.AdditionalImportantInformation.PreparationTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Day Guidelines */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Day Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.AdditionalImportantInformation.ExamDayGuidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Tips */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.AdditionalImportantInformation.ApplicationTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counselling Preparation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Preparation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.AdditionalImportantInformation.CounsellingPreparation.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Common Mistakes to Avoid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.AdditionalImportantInformation.CommonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{mistake}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">NTA Support</h4>
                    <p className="text-gray-600">Helpline: {data.AdditionalImportantInformation.EmergencyContacts.NTAHelpline}</p>
                    <p className="text-gray-600">Email: {data.AdditionalImportantInformation.EmergencyContacts.Email}</p>
                    <p className="text-gray-600">Website: {data.AdditionalImportantInformation.EmergencyContacts.Website}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">MCC Support</h4>
                    <p className="text-gray-600">Helpline: {data.AdditionalImportantInformation.EmergencyContacts.MCCHelpline}</p>
                    <p className="text-gray-600">Email: {data.AdditionalImportantInformation.EmergencyContacts.MCCEmail}</p>
                  </div>
                </div>
              </div>

              {/* Fee Structure */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Fee Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Application Fees</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">General: {data.AdditionalImportantInformation.FeeStructure.ApplicationFee.General}</p>
                      <p className="text-gray-600">OBC: {data.AdditionalImportantInformation.FeeStructure.ApplicationFee.OBC}</p>
                      <p className="text-gray-600">SC/ST/PwD: {data.AdditionalImportantInformation.FeeStructure.ApplicationFee["SC/ST/PwD"]}</p>
                      <p className="text-gray-600">Foreign: {data.AdditionalImportantInformation.FeeStructure.ApplicationFee.Foreign}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Counselling Fees</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">MCC: {data.AdditionalImportantInformation.FeeStructure.CounsellingFee.MCC}</p>
                      <p className="text-gray-600">State: {data.AdditionalImportantInformation.FeeStructure.CounsellingFee.StateCounselling}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">College Fees (Annual)</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">MBBS: {data.AdditionalImportantInformation.FeeStructure.CollegeFees.MBBS}</p>
                      <p className="text-gray-600">BDS: {data.AdditionalImportantInformation.FeeStructure.CollegeFees.BDS}</p>
                      <p className="text-gray-600">BAMS: {data.AdditionalImportantInformation.FeeStructure.CollegeFees.BAMS}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Reservation Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Quota Distribution</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">All India Quota: {data.AdditionalImportantInformation.ReservationDetails.AllIndiaQuota}</p>
                      <p className="text-gray-600">State Quota: {data.AdditionalImportantInformation.ReservationDetails.StateQuota}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Category Reservations</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">SC: {data.AdditionalImportantInformation.ReservationDetails.Categories.SC}</p>
                      <p className="text-gray-600">ST: {data.AdditionalImportantInformation.ReservationDetails.Categories.ST}</p>
                      <p className="text-gray-600">OBC: {data.AdditionalImportantInformation.ReservationDetails.Categories.OBC}</p>
                      <p className="text-gray-600">EWS: {data.AdditionalImportantInformation.ReservationDetails.Categories.EWS}</p>
                      <p className="text-gray-600">PwD: {data.AdditionalImportantInformation.ReservationDetails.Categories.PwD}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seat Distribution */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Seat Distribution</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-semibold text-gray-800">Total MBBS</p>
                    <p className="text-lg font-bold text-gray-600">{data.AdditionalImportantInformation.SeatDistribution.TotalMBBSSeats}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-semibold text-gray-800">Government</p>
                    <p className="text-lg font-bold text-gray-600">{data.AdditionalImportantInformation.SeatDistribution.GovernmentSeats}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-semibold text-gray-800">Private</p>
                    <p className="text-lg font-bold text-gray-600">{data.AdditionalImportantInformation.SeatDistribution.PrivateSeats}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-semibold text-gray-800">Deemed</p>
                    <p className="text-lg font-bold text-gray-600">{data.AdditionalImportantInformation.SeatDistribution.DeemedUniversities}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-semibold text-gray-800">Central</p>
                    <p className="text-lg font-bold text-gray-600">{data.AdditionalImportantInformation.SeatDistribution.CentralUniversities}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Regularly check the official NTA NEET website for updated announcements and changes in dates.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>NEET paper will be available in 13 languages; select your preferred language carefully during application.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Follow NTA's strict instructions about dress code, stationery, and electronic devices prohibited in exam centers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Keep all academic and identity documents ready for counselling and verification.</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-6">
            {/* Eligibility Criteria for NEET 2026 - Formal Version */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Criteria for NEET 2026</h2>
              
              {/* Nationality */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nationality</h3>
                <p className="text-gray-700">Candidates belonging to the following categories are eligible to apply:</p>
                <p className="text-gray-700">Indian Nationals, NRIs (Non-Resident Indians), OCIs (Overseas Citizens of India), PIOs (Persons of Indian Origin), and Foreign Nationals.</p>
                  </div>
                  
              {/* Age Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Requirements</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Minimum Age: 17 years as on December 31, 2026</li>
                  <li>Upper Age Limit: No upper age limit is prescribed</li>
                </ul>
                  </div>
                  
              {/* Educational Qualification */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Educational Qualification</h3>
                <p className="text-gray-700">Candidates must have passed or be appearing in the 10+2 or equivalent examination with Physics, Chemistry, Biology/Biotechnology, and English as core subjects.</p>
                </div>
                
              {/* Minimum Marks Required */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Minimum Marks Required</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>General Category: Minimum 50% aggregate in Physics, Chemistry, Biology/Biotechnology, and English</li>
                  <li>OBC/SC/ST Category: Minimum 40% aggregate in the above subjects</li>
                  <li>PwD Category: Minimum 45% aggregate in the above subjects</li>
                </ul>
                  </div>
                  
              {/* Number of Attempts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Number of Attempts</h3>
                <p className="text-gray-700">There is no restriction on the number of attempts for NEET 2026.</p>
              </div>
            </div>

            {/* Detailed Eligibility Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Eligibility Criteria</h2>
              
              {/* Nationality & Citizenship */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Nationality & Citizenship</h3>
                <p className="text-gray-700 mb-4">The NEET 2026 eligibility criteria are inclusive, allowing candidates from multiple backgrounds to apply:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Indian Nationals: Candidates holding Indian citizenship</li>
                  <li>Non-Resident Indians (NRIs): Indian citizens residing abroad who retain Indian nationality</li>
                  <li>Overseas Citizens of India (OCIs): Foreign citizens of Indian origin entitled to apply under rights similar to NRIs</li>
                  <li>Persons of Indian Origin (PIOs): Individuals tracing their lineage to India as defined by government regulations</li>
                  <li>Foreign Nationals: Candidates holding foreign passports can also apply, provided they meet admission and seat allocation norms applicable to foreign nationals</li>
                </ul>
              </div>

              {/* Age Requirements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Age Requirements</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Minimum Age</h4>
                    <p className="text-gray-700 mb-2">Candidates must be at least 17 years old on or before December 31, 2026</p>
                    <p className="text-gray-700 text-sm">Those born on or before December 31, 2009, are eligible.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Upper Age Limit</h4>
                    <p className="text-gray-700 mb-2">There is no upper age limit for appearing in NEET 2026, as per recent Supreme Court and NMC rulings.</p>
                    <p className="text-gray-700 text-sm">The removal of upper age restrictions ensures equal opportunity for all aspirants.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Age Verification</h4>
                    <p className="text-gray-700">The date of birth mentioned on the Class 10 certificate or equivalent document will be considered official.</p>
                  </div>
                </div>
              </div>

              {/* Educational Qualifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Educational Qualifications</h3>
                <p className="text-gray-700 mb-4">Applicants must have passed or be appearing in a recognized qualifying examination that meets the following conditions:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Qualification: Candidates should have passed or be appearing in Class 12 (10+2) or an equivalent exam from recognized boards such as CBSE, ICSE, State Boards, or NIOS.</li>
                  <li>Mandatory Subjects: Candidates must have studied the following subjects: Physics, Chemistry, Biology/Biotechnology, and English (as a compulsory subject).</li>
                </ul>
              </div>

              {/* Minimum Marks Required */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Minimum Marks Required in the Qualifying Examination</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">General Category</h4>
                    <p className="text-gray-700">Minimum 50% aggregate in Physics, Chemistry, and Biology/Biotechnology, with English as a compulsory subject.</p>
                    </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">OBC/SC/ST Categories</h4>
                    <p className="text-gray-700">Minimum 40% aggregate in Physics, Chemistry, and Biology/Biotechnology, including English.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">PwD Category</h4>
                    <p className="text-gray-700">Candidates under the PwD category must secure at least 45% aggregate in the same subjects.</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-semibold mb-2">Additional Notes:</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Candidates must pass each subject individually.</li>
                    <li>Open school or private candidates are eligible if they meet the subject and minimum mark requirements.</li>
                  </ul>
                </div>
              </div>

              {/* Year of Passing and Attempt Eligibility */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Year of Passing and Attempt Eligibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Year of Passing</h4>
                    <p className="text-gray-700">Candidates appearing in Class 12 in 2026, or who have passed in 2025 or 2024, are eligible to apply.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Number of Attempts</h4>
                    <p className="text-gray-700">There is no limit on the number of NEET attempts. Candidates can appear multiple times to improve their scores.</p>
                  </div>
                </div>
              </div>

              {/* Qualifying Codes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Qualifying Codes (Educational Background)</h3>
                <p className="text-gray-700 mb-4">To ensure proper verification of academic qualifications, NTA assigns specific codes based on educational background:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Code</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">01</td>
                        <td className="border border-gray-300 px-4 py-2">Currently appearing or passed Class 12 in 2026 and awaiting results</td>
                        </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">02</td>
                        <td className="border border-gray-300 px-4 py-2">Passed Class 12 before 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">03</td>
                        <td className="border border-gray-300 px-4 py-2">Passed Pre-degree exam in Science in India with PCB and English (including practicals)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">04</td>
                        <td className="border border-gray-300 px-4 py-2">Passed any Pre-professional or Pre-medical exam after Class 12</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">05</td>
                        <td className="border border-gray-300 px-4 py-2">Currently studying in the first year of a three-year degree course</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">06</td>
                        <td className="border border-gray-300 px-4 py-2">Completed B.Sc. with at least two subjects among Physics, Chemistry, and Biology, and passed Class 12 with PCB</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">07</td>
                        <td className="border border-gray-300 px-4 py-2">Qualified from foreign or equivalent pre-university/board exams</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mt-4 text-sm">Candidates must carefully select the correct qualifying code during the application process to avoid disqualification or eligibility issues.</p>
              </div>

              {/* Special Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Special Categories – PwD and Other Considerations</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>PwD Candidates: Enjoy horizontal reservation and a slightly relaxed minimum mark requirement (45% for General-PwD).</li>
                  <li>Biology as an Additional Subject: Candidates taking Biology/Biotechnology as an additional subject are eligible but must follow the latest NMC guidelines during admission.</li>
                  <li>Open School/NIOS Candidates: Eligible provided they have studied the mandatory subjects through a recognized board.</li>
                </ul>
              </div>

              {/* Domicile and State Quotas */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Domicile and State Quotas</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>While NEET is a national-level examination, admissions follow All India Quota (15%) and State Quota (85%) policies.</li>
                  <li>Candidates with state domicile may receive preference during state-level counselling.</li>
                  <li>Valid domicile certificates are required for state quota admissions.</li>
                </ul>
              </div>

              {/* Summary Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary Table: NEET 2026 Core Eligibility Criteria</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Criteria</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Nationality</td>
                        <td className="border border-gray-300 px-4 py-2">Indian, NRI, OCI, PIO, Foreign Nationals</td>
                        </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Age</td>
                        <td className="border border-gray-300 px-4 py-2">17 years as on December 31, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Upper Age Limit</td>
                        <td className="border border-gray-300 px-4 py-2">None</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Education</td>
                        <td className="border border-gray-300 px-4 py-2">Passed/appearing Class 12 or equivalent with PCB & English</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Marks</td>
                        <td className="border border-gray-300 px-4 py-2">50% (General), 40% (Reserved), 45% (PwD)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Attempts</td>
                        <td className="border border-gray-300 px-4 py-2">Unlimited</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Year of Passing</td>
                        <td className="border border-gray-300 px-4 py-2">Appearing or passed in 2026 or earlier</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Important Additional Notes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Additional Notes for NEET 2026 Eligibility</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Verification & Documentation: Candidates must retain original mark sheets, certificates, and valid photo ID for counselling verification.</li>
                  <li>Foreign Nationals: Admission depends on eligibility confirmation and seat availability under the All India or institutional quota.</li>
                  <li>Board Equivalency: International students must obtain an equivalency certificate validating PCB and English subjects.</li>
                  <li>Information Updates: Aspirants should refer to the official NEET 2026 Information Bulletin for the latest amendments.</li>
                  <li>Syllabus Relevance: Preparation should align with the NCERT Class 11 and 12 syllabus in Physics, Chemistry, and Biology for best results.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-6">
            {/* NEET 2026 Application Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Application Process</h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mode of Application</h3>
              <p className="text-gray-700 mb-6">
                The NEET 2026 application process will be conducted <strong>exclusively in online mode</strong> through the official NTA websites – 
                <a href="https://nta.ac.in" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">nta.ac.in</a> 
                or 
                <a href="https://neet.nta.nic.in" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">neet.nta.nic.in</a>. 
                No offline or paper-based submissions are accepted.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Application Timeline</h3>
              <p className="text-gray-700 mb-6">
                The registration window is expected to remain open from <strong>February to March 2026</strong>, giving candidates sufficient time to complete and verify their applications.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Application Fee Structure</h3>
              <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Application Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">General</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,700</td>
                        </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">OBC</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,600</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">SC/ST/Reserved</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Foreign Nationals</td>
                      <td className="border border-gray-300 px-4 py-2">₹9,500</td>
                    </tr>
                    </tbody>
                  </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Step-by-Step Guide to the NEET 2026 Application Process</h3>
              <p className="text-gray-700 mb-6">
                The <strong>National Testing Agency (NTA)</strong> manages the entire NEET 2026 registration process online. The step-by-step procedure outlined below ensures candidates can apply smoothly and avoid errors.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Step 1: Registration on the Official Portal</h3>
              <ul className="space-y-3 mb-8 text-gray-700 list-disc list-inside">
                <li className="flex items-start">
                  
                  <span>Visit the official NTA NEET websites: <strong>nta.ac.in</strong> or <strong>neet.nta.nic.in</strong>.</span>
                        </li>
                <li className="flex items-start">
                  
                  <span>Click on the <em>"New Registration"</em> or <em>"Fill Registration Form"</em> link available on the homepage once registration begins.</span>
                    </li>
                <li className="flex items-start">
                  <span>Carefully read all instructions and eligibility criteria before proceeding.</span>
                </li>
                <li className="flex items-start">
                  <span>Enter basic personal details such as full name, date of birth, gender, nationality, email ID, and mobile number — exactly as mentioned in official documents.</span>
                </li>
                <li className="flex items-start">
                  <span>Create a secure password and choose security questions to protect your account.</span>
                </li>
                <li className="flex items-start">
                  <span>Submit the form to receive your <strong>unique application number and password</strong> via OTP confirmation sent to your registered email and mobile number.</span>
                </li>
                <li className="flex items-start">
                  <span>Keep these credentials safe for future logins.</span>
                </li>
                </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Step 2: Filling the Application Form</h3>
              <p className="text-gray-700 mb-4">
                Log in using the provided credentials and enter the following details carefully:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                  <p className="text-gray-600">Full name, parents' names, date of birth, gender, category, and PwD status (if applicable).</p>
                  </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Contact Details</h4>
                  <p className="text-gray-600">Provide both permanent and correspondence addresses, including postal codes.</p>
                  </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Academic Details</h4>
                  <p className="text-gray-600">Mention the board name, year of passing, roll number, and marks for Class 10 and Class 12 (or appearing status).</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Language & Exam Center Preferences</h4>
                  <p className="text-gray-600">Select the preferred <strong>medium of the question paper</strong> (out of 13 available languages) and <strong>two exam cities</strong> in order of preference.</p>
                    </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Parents/Guardian Details</h4>
                  <p className="text-gray-600">Include occupation, annual income, and educational qualifications.</p>
                  </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Other Declarations</h4>
                  <p className="text-gray-600">If your customary attire conflicts with the examination dress code, declare it here.</p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-gray-800 text-sm">
                  ⚠️ <strong>Note:</strong> Ensure all information is accurate and complete. Incomplete or incorrect entries may lead to rejection.
                </p>
            </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Step 3: Uploading Required Documents</h3>
              <p className="text-gray-700 mb-4">
                Upload the scanned copies of required documents in the prescribed format and size:
              </p>
              <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Document</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Format</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Size Limit</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Passport-size Photograph</td>
                      <td className="border border-gray-300 px-4 py-2">JPG/JPEG</td>
                      <td className="border border-gray-300 px-4 py-2">10 KB – 200 KB</td>
                      <td className="border border-gray-300 px-4 py-2">Recent color photo</td>
                        </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Signature</td>
                      <td className="border border-gray-300 px-4 py-2">JPG/JPEG</td>
                      <td className="border border-gray-300 px-4 py-2">4 KB – 30 KB</td>
                      <td className="border border-gray-300 px-4 py-2">On white paper with blue/black ink</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Left-hand Thumb Impression</td>
                      <td className="border border-gray-300 px-4 py-2">JPG/JPEG</td>
                      <td className="border border-gray-300 px-4 py-2">10 KB – 50 KB</td>
                      <td className="border border-gray-300 px-4 py-2">If applicable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Class 10 Marksheet/Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">PDF/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                      <td className="border border-gray-300 px-4 py-2">For DOB verification</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Class 12 Marksheet</td>
                      <td className="border border-gray-300 px-4 py-2">PDF/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                      <td className="border border-gray-300 px-4 py-2">If available</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Category Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">PDF/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory for reserved categories</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">PwD Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">PDF/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory for PwD candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Identity Proof</td>
                      <td className="border border-gray-300 px-4 py-2">PDF/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">—</td>
                      <td className="border border-gray-300 px-4 py-2">Aadhaar, Passport, PAN, etc.</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              <p className="text-gray-700 mb-8">
                Ensure all uploads are <strong>clear, legible, and within size limits</strong> to prevent rejection.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Step 4: Payment of Application Fee</h3>
              <p className="text-gray-700 mb-4">
                Candidates must pay the application fee online using <strong>Net Banking, Credit/Debit Card, or UPI</strong>.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Application Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">General</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,700</td>
                            </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,600</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">SC/ST/Reserved</td>
                        <td className="border border-gray-300 px-4 py-2">₹1,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Foreign Nationals</td>
                        <td className="border border-gray-300 px-4 py-2">₹9,500</td>
                      </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Important Instructions:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                          <span className="text-gray-800 mr-2 mt-1">•</span>
                    <span>Fees once paid are <strong>non-refundable</strong> under any circumstance.</span>
                        </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2 mt-1">•</span>
                    <span>After payment, candidates receive confirmation via <strong>SMS and email</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2 mt-1">•</span>
                    <span>Retain the <strong>payment receipt and confirmation page</strong> for future reference.</span>
                  </li>
                    </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Step 5: Review and Final Submission</h3>
              <ul className="space-y-3 mb-6 text-gray-700 list-disc list-inside">
                <li className="flex items-start">
                  
                  <span>Review all details carefully before submitting the form.</span>
                    </li>
                <li className="flex items-start">
                  
                  <span>Only limited corrections can be made later during the <strong>correction window</strong>.</span>
                    </li>
                <li className="flex items-start">
                  
                  <span>Confirm final submission by selecting the <em>"Yes, Submit"</em> prompt.</span>
                </li>
                <li className="flex items-start">
                  
                  <span>Download and print the <strong>confirmation page</strong> — this acts as proof of successful application.</span>
                </li>
                </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Post-Submission: Application Correction Window</h3>
              <p className="text-gray-700 mb-4">
                After the registration deadline, NTA provides a short correction window allowing candidates to edit select details such as:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Exam city preference</span>
                    </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Category or PwD status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Spelling corrections in name or address</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Photo or signature re-upload</span>
                </li>
                </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
                <p className="text-gray-800 text-sm">
                  <em>Note:</em> Some changes may require additional payment. This is the final opportunity to rectify errors before admit card release.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Tips for NEET 2026 Applicants</h3>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Keep all scanned documents ready before starting the application.</span>
                    </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Use a <strong>stable internet connection</strong> to avoid submission errors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Enter personal details exactly as per official ID proof.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Ensure <strong>photographs and signatures</strong> meet clarity and background standards.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Safeguard your application number and password.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Do not delay submission until the last day to avoid technical issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Keep <strong>multiple printouts</strong> of the confirmation page for future reference.</span>
                </li>
                </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Checklist for NEET 2026 Application</h3>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Recent passport-size photograph (white background)</span>
                    </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Signature on white paper using black/blue ink</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Left-hand thumb impression (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Class 10 certificate or marksheet (proof of DOB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Class 12 marksheet/admit card (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Category certificate (SC/ST/OBC/EWS), if applicable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>PwD certificate (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Valid government photo ID (Aadhaar, Passport, PAN, Voter ID)</span>
                </li>
                </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Tentative NEET 2026 Application Dates</h3>
              <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Date</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Application Start</td>
                      <td className="border border-gray-300 px-4 py-2">First week of February 2026</td>
                        </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Application End</td>
                      <td className="border border-gray-300 px-4 py-2">First week of March 2026</td>
                      </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Correction Window</td>
                      <td className="border border-gray-300 px-4 py-2">Mid to late March 2026</td>
                        </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Admit Card Release</td>
                      <td className="border border-gray-300 px-4 py-2">First week of May 2026</td>
                    </tr>
                    </tbody>
                  </table>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h3>
              <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Q1. Can I change my exam center after submitting the form?</h4>
                  <p className="text-gray-600">You can request changes only during the correction window, and they are subject to availability.</p>
                    </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Q2. What should I do if my photograph or signature is rejected?</h4>
                  <p className="text-gray-600">You will be notified during the correction window to re-upload images that meet NTA's specifications.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Q3. Is offline registration available?</h4>
                  <p className="text-gray-600">No. NEET registration is strictly online.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Q4. What happens if my fee payment fails?</h4>
                  <p className="text-gray-600">Retry using a different payment method before the deadline or contact NTA helpline support.</p>
                  </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Q5. Are there any fee concessions for reserved categories?</h4>
                  <p className="text-gray-600">Yes, reduced fees apply as specified for SC, ST, OBC, and EWS candidates.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Best Practices for a Smooth NEET Application</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Prepare all documents beforehand.</span>
                    </li>
                <li className="flex items-start">
                          <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Fill out the form early to avoid last-minute server issues.</span>
                        </li>
                <li className="flex items-start">
                          <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Double-check eligibility and category details.</span>
                        </li>
                <li className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Retain a copy of every document submitted.</span>
                    </li>
                <li className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                  <span>Regularly visit the official NTA website for latest updates.</span>
                    </li>
                </ul>
              </div>

          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-6">
            {/* Basic Exam Pattern Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Exam Pattern</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Exam Structure</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Total Questions:</span> {data.ExamPattern.TotalQuestions}</p>
                      <p><span className="font-medium">Questions per Subject:</span> {data.ExamPattern.QuestionsPerSubject}</p>
                      <p><span className="font-medium">Total Marks:</span> {data.ExamPattern.TotalMarks}</p>
                      <p><span className="font-medium">Exam Duration:</span> {data.ExamPattern.ExamDuration}</p>
                      <p><span className="font-medium">Marking Scheme:</span> {data.ExamPattern.MarkingScheme}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Subjects</h3>
                    <div className="space-y-2">
                      {data.ExamPattern.Subjects.map((subject, index) => (
                        <div key={index} className="bg-gray-50 p-2 rounded">
                          <span className="font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Language Options</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {data.ExamPattern.LanguageOptions.map((language, index) => (
                      <div key={index} className="bg-blue-50 p-2 rounded text-center">
                        <span className="text-sm font-medium">{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Exam Pattern */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.DetailedExamPattern.Introduction.title}</h2>
              <p className="text-gray-600 mb-8">{data.DetailedExamPattern.Introduction.description}</p>

              {/* General Structure */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.GeneralStructure.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedExamPattern.GeneralStructure.features.map((feature, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{feature.feature}</td>
                          <td className="border border-gray-300 px-4 py-2">{feature.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section-wise Distribution */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.SectionWiseDistribution.title}</h3>
                <p className="text-gray-600 mb-4">{data.DetailedExamPattern.SectionWiseDistribution.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section A</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section B</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedExamPattern.SectionWiseDistribution.sections.map((section, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{section.subject}</td>
                          <td className="border border-gray-300 px-4 py-2">{section.sectionA}</td>
                          <td className="border border-gray-300 px-4 py-2">{section.sectionB}</td>
                          <td className="border border-gray-300 px-4 py-2">{section.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 text-sm">{data.DetailedExamPattern.SectionWiseDistribution.note}</p>
                </div>
              </div>

              {/* Detailed Subject-wise Weightage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.DetailedSubjectWiseWeightage.title}</h3>
                <div className="space-y-4">
                  {data.DetailedExamPattern.DetailedSubjectWiseWeightage.subjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{subject.subject}</h4>
                      <div className="space-y-2">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Class 11 Topics:</h5>
                          <p className="text-gray-600 text-sm">{subject.class11Topics}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Class 12 Topics:</h5>
                          <p className="text-gray-600 text-sm">{subject.class12Topics}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Difficulty Level:</h5>
                          <p className="text-gray-600 text-sm">{subject.difficultyLevel}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marking Breakdown and Scoring Logic */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.MarkingBreakdownAndScoringLogic.title}</h3>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Response Type</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Awarded</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.DetailedExamPattern.MarkingBreakdownAndScoringLogic.markingScheme.map((scheme, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{scheme.responseType}</td>
                            <td className="border border-gray-300 px-4 py-2">{scheme.marksAwarded}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Scoring Details</h4>
                    <ul className="space-y-1">
                      {data.DetailedExamPattern.MarkingBreakdownAndScoringLogic.scoringDetails.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gray-800 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Language Options and Code Mapping */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.LanguageOptionsAndCodeMapping.title}</h3>
                <p className="text-gray-600 mb-4">{data.DetailedExamPattern.LanguageOptionsAndCodeMapping.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Language</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Available Centers</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Paper Code Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedExamPattern.LanguageOptionsAndCodeMapping.languages.map((lang, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{lang.language}</td>
                          <td className="border border-gray-300 px-4 py-2">{lang.availableCenters}</td>
                          <td className="border border-gray-300 px-4 py-2">{lang.paperCodeFormat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Important Notes</h4>
                  <ul className="space-y-1">
                    {data.DetailedExamPattern.LanguageOptionsAndCodeMapping.importantNotes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Exam Logistics and Administration */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.ExamLogisticsAndAdministration.title}</h3>
                <ul className="space-y-2">
                  {data.DetailedExamPattern.ExamLogisticsAndAdministration.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Question Difficulty Analysis */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.QuestionDifficultyAnalysis.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Difficulty Level</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Physics</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Chemistry</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Biology</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedExamPattern.QuestionDifficultyAnalysis.difficultyBreakdown.map((level, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{level.difficultyLevel}</td>
                          <td className="border border-gray-300 px-4 py-2">{level.physics}</td>
                          <td className="border border-gray-300 px-4 py-2">{level.chemistry}</td>
                          <td className="border border-gray-300 px-4 py-2">{level.biology}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 text-sm">{data.DetailedExamPattern.QuestionDifficultyAnalysis.note}</p>
                </div>
              </div>

              {/* Syllabus Basis */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.SyllabusBasis.title}</h3>
                <p className="text-gray-600">{data.DetailedExamPattern.SyllabusBasis.description}</p>
              </div>

              {/* Subject Proportion with Marks Weightage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.SubjectProportionWithMarksWeightage.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedExamPattern.SubjectProportionWithMarksWeightage.subjects.map((subject, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{subject.subject}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.questions}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.marks}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Result and Scoring Insights */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedExamPattern.ResultAndScoringInsights.title}</h3>
                <ul className="space-y-2">
                  {data.DetailedExamPattern.ResultAndScoringInsights.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Extended Exam Pattern Insights */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.ExtendedExamPatternInsights.Introduction.title}</h2>
              <p className="text-gray-600 mb-8">{data.ExtendedExamPatternInsights.Introduction.description}</p>

              {/* General Exam Structure Recap */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.GeneralExamStructureRecap.title}</h3>
                <ul className="space-y-2">
                  {data.ExtendedExamPatternInsights.GeneralExamStructureRecap.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chapter-wise Weightage Overview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.ChapterWiseWeightageOverview.title}</h3>
                <p className="text-gray-600 mb-6">{data.ExtendedExamPatternInsights.ChapterWiseWeightageOverview.description}</p>
              </div>

              {/* Physics Chapter Weightage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.PhysicsChapterWeightage.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Chapter</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ExtendedExamPatternInsights.PhysicsChapterWeightage.chapters.map((chapter, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{chapter.chapter}</td>
                          <td className="border border-gray-300 px-4 py-2">{chapter.questions}</td>
                          <td className="border border-gray-300 px-4 py-2">{chapter.weightage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 text-sm">{data.ExtendedExamPatternInsights.PhysicsChapterWeightage.note}</p>
                </div>
              </div>

              {/* Chemistry Chapter Weightage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.ChemistryChapterWeightage.title}</h3>
                <p className="text-gray-600 mb-4">{data.ExtendedExamPatternInsights.ChemistryChapterWeightage.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Chapter</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ExtendedExamPatternInsights.ChemistryChapterWeightage.chapters.map((chapter, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{chapter.chapter}</td>
                          <td className="border border-gray-300 px-4 py-2">{chapter.questions}</td>
                          <td className="border border-gray-300 px-4 py-2">{chapter.weightage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Biology Chapter Weightage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.BiologyChapterWeightage.title}</h3>
                <p className="text-gray-600 mb-6">{data.ExtendedExamPatternInsights.BiologyChapterWeightage.description}</p>
                
                {/* Botany Chapters */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">Botany Key Chapters with Weightage</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Chapter</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.ExtendedExamPatternInsights.BiologyChapterWeightage.botanyChapters.map((chapter, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{chapter.chapter}</td>
                            <td className="border border-gray-300 px-4 py-2">{chapter.questions}</td>
                            <td className="border border-gray-300 px-4 py-2">{chapter.weightage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Zoology Chapters */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">Zoology Key Chapters with Weightage</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Chapter</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.ExtendedExamPatternInsights.BiologyChapterWeightage.zoologyChapters.map((chapter, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{chapter.chapter}</td>
                            <td className="border border-gray-300 px-4 py-2">{chapter.questions}</td>
                            <td className="border border-gray-300 px-4 py-2">{chapter.weightage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Additional NEET 2026 Exam Insights */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.title}</h3>
                
                {/* Syllabus Updates and Tips */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.syllabusUpdatesAndTips.title}</h4>
                  <ul className="space-y-2">
                    {data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.syllabusUpdatesAndTips.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Strategic Preparation Tips */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.strategicPreparationTips.title}</h4>
                  <ul className="space-y-2">
                    {data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.strategicPreparationTips.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exam Day Instructions */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.examDayInstructions.title}</h4>
                  <ul className="space-y-2">
                    {data.ExtendedExamPatternInsights.AdditionalNEET2026ExamInsights.examDayInstructions.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-6">
            {/* Basic Syllabus Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Syllabus</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Syllabus Basis</h3>
                  <p className="text-gray-600">{data.Syllabus.BasedOn}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Important Notes</h3>
                  <p className="text-gray-600">{data.Syllabus.Notes}</p>
                </div>
              </div>
            </div>

            {/* Comprehensive Syllabus Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.ComprehensiveSyllabusGuide.Introduction.title}</h2>
              <p className="text-gray-600 mb-8">{data.ComprehensiveSyllabusGuide.Introduction.description}</p>

              {/* Syllabus Structure Overview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.SyllabusStructureOverview.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Number of Chapters</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total Questions Approx.</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Weightage (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ComprehensiveSyllabusGuide.SyllabusStructureOverview.subjects.map((subject, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{subject.subject}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.chapters}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.questions}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.weightage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.SyllabusStructureOverview.note}</p>
                </div>
              </div>

              {/* Detailed Subject-Wise Topics Breakdown */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.title}</h3>
                
                {/* Physics Syllabus */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 11 Topics:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.class11Topics}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 12 Topics:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.class12Topics}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Key Insights:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.keyInsights}</p>
                    </div>
                  </div>
                </div>

                {/* Chemistry Syllabus */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 11 Topics:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.class11Topics}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 12 Topics:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.class12Topics}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Important Note:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.importantNote}</p>
                    </div>
                  </div>
                </div>

                {/* Biology Syllabus */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 11 Topics:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.class11Topics}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 12 Topics:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.class12Topics}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Key Insights:</h5>
                      <p className="text-gray-600 text-sm">{data.ComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.keyInsights}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Changes in Syllabus and Exam Pattern */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.ChangesInSyllabusAndExamPattern.title}</h3>
                <ul className="space-y-2">
                  {data.ComprehensiveSyllabusGuide.ChangesInSyllabusAndExamPattern.changes.map((change, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation Focus Areas */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.PreparationFocusAreas.title}</h3>
                <ul className="space-y-2">
                  {data.ComprehensiveSyllabusGuide.PreparationFocusAreas.areas.map((area, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language and Medium */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.LanguageAndMedium.title}</h3>
                <p className="text-gray-600">{data.ComprehensiveSyllabusGuide.LanguageAndMedium.description}</p>
              </div>

              {/* Summary Table of Key Chapters */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSyllabusGuide.SummaryTableOfKeyChapters.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Important Topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.ComprehensiveSyllabusGuide.SummaryTableOfKeyChapters.subjects.map((subject, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{subject.subject}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.importantTopics}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* In-Depth Comprehensive Syllabus Guide */}
            {data.InDepthComprehensiveSyllabusGuide && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.InDepthComprehensiveSyllabusGuide.Introduction.title}</h2>
              <p className="text-gray-600 mb-8">{data.InDepthComprehensiveSyllabusGuide.Introduction.description}</p>

              {/* Syllabus Structure at a Glance */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.SyllabusStructureAtAGlance.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">No. of Chapters (Approx)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Approx. Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Weightage (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.InDepthComprehensiveSyllabusGuide.SyllabusStructureAtAGlance.subjects.map((subject, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{subject.subject}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.chapters}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.questions}</td>
                          <td className="border border-gray-300 px-4 py-2">{subject.weightage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 text-sm">{data.InDepthComprehensiveSyllabusGuide.SyllabusStructureAtAGlance.note}</p>
                </div>
              </div>

              {/* Detailed Subject-Wise Topics Breakdown */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.title}</h3>
                
                {/* Physics Syllabus */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 11 Topics:</h5>
                      <ul className="space-y-1">
                        {data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.class11Topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 12 Topics:</h5>
                      <ul className="space-y-1">
                        {data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.class12Topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Exam Focus:</h5>
                      <p className="text-gray-600 text-sm">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.physicsSyllabus.examFocus}</p>
                    </div>
                  </div>
                </div>

                {/* Chemistry Syllabus */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 11 Topics:</h5>
                      <ul className="space-y-1">
                        {data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.class11Topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 12 Topics:</h5>
                      <ul className="space-y-1">
                        {data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.class12Topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Notable Omissions:</h5>
                      <p className="text-gray-600 text-sm">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.chemistrySyllabus.notableOmissions}</p>
                    </div>
                  </div>
                </div>

                {/* Biology Syllabus */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 11 Topics:</h5>
                      <ul className="space-y-1">
                        {data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.class11Topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Class 12 Topics:</h5>
                      <ul className="space-y-1">
                        {data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.class12Topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Exam Focus:</h5>
                      <p className="text-gray-600 text-sm">{data.InDepthComprehensiveSyllabusGuide.DetailedSubjectWiseTopicsBreakdown.biologySyllabus.examFocus}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Syllabus Updates for NEET 2026 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.ImportantSyllabusUpdatesForNEET2026.title}</h3>
                <ul className="space-y-2">
                  {data.InDepthComprehensiveSyllabusGuide.ImportantSyllabusUpdatesForNEET2026.updates.map((update, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{update}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exam & Preparation Highlights */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.ExamAndPreparationHighlights.title}</h3>
                <ul className="space-y-2">
                  {data.InDepthComprehensiveSyllabusGuide.ExamAndPreparationHighlights.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language Medium & Exam Format */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.LanguageMediumAndExamFormat.title}</h3>
                <p className="text-gray-600">{data.InDepthComprehensiveSyllabusGuide.LanguageMediumAndExamFormat.description}</p>
              </div>

              {/* Sample In-Depth Chapter Listings */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.InDepthComprehensiveSyllabusGuide.SampleInDepthChapterListings.title}</h3>
                <ul className="space-y-2">
                  {data.InDepthComprehensiveSyllabusGuide.SampleInDepthChapterListings.chapters.map((chapter, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{chapter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )}
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-6">
            {/* Basic Expected Cutoff Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Expected Cutoff for NEET 2026</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">General/UR</h3>
                      <div className="space-y-1">
                        <p><span className="font-medium">Percentile:</span> {data.ExpectedCutoff2026["General/UR"].Percentile}</p>
                        <p><span className="font-medium">Cutoff Marks:</span> {data.ExpectedCutoff2026["General/UR"].CutoffMarks}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">OBC/SC/ST</h3>
                      <div className="space-y-1">
                        <p><span className="font-medium">Percentile:</span> {data.ExpectedCutoff2026["OBC/SC/ST"].Percentile}</p>
                        <p><span className="font-medium">Cutoff Marks:</span> {data.ExpectedCutoff2026["OBC/SC/ST"].CutoffMarks}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Gen-PwD</h3>
                      <div className="space-y-1">
                        <p><span className="font-medium">Percentile:</span> {data.ExpectedCutoff2026["Gen-PwD"].Percentile}</p>
                        <p><span className="font-medium">Cutoff Marks:</span> {data.ExpectedCutoff2026["Gen-PwD"].CutoffMarks}</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">OBC/SC/ST-PwD</h3>
                      <div className="space-y-1">
                        <p><span className="font-medium">Percentile:</span> {data.ExpectedCutoff2026["OBC/SC/ST-PwD"].Percentile}</p>
                        <p><span className="font-medium">Cutoff Marks:</span> {data.ExpectedCutoff2026["OBC/SC/ST-PwD"].CutoffMarks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Cutoff Analysis */}
            {data.DetailedCutoffAnalysis && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.DetailedCutoffAnalysis.Introduction.title}</h2>
              <p className="text-gray-600 mb-8">{data.DetailedCutoffAnalysis.Introduction.description}</p>

              {/* What is NEET Cutoff */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.WhatIsNEETCutoff.title}</h3>
                <ul className="space-y-2">
                  {data.DetailedCutoffAnalysis.WhatIsNEETCutoff.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cutoff Percentiles and Marks by Category */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.CutoffPercentilesAndMarksByCategory.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentile</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Cutoff Marks Range (out of 720)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedCutoffAnalysis.CutoffPercentilesAndMarksByCategory.categories.map((category, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{category.category}</td>
                          <td className="border border-gray-300 px-4 py-2">{category.percentile}</td>
                          <td className="border border-gray-300 px-4 py-2">{category.cutoffMarks}</td>
                          <td className="border border-gray-300 px-4 py-2">{category.additionalNotes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Factors Affecting NEET 2026 Cutoff */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.FactorsAffectingNEET2026Cutoff.title}</h3>
                <ul className="space-y-2 list-disc list-inside">
                  {data.DetailedCutoffAnalysis.FactorsAffectingNEET2026Cutoff.factors.map((factor, index) => (
                    <li key={index} className="text-gray-600">{factor}</li>
                  ))}
                </ul>
              </div>

              {/* Historical Cutoff Trends */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.HistoricalCutoffTrends.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Year</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">General Cutoff Marks</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">OBC/SC/ST Cutoff Marks</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">PwD Cutoff Marks (General/Reserved)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedCutoffAnalysis.HistoricalCutoffTrends.years.map((year, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{year.year}</td>
                          <td className="border border-gray-300 px-4 py-2">{year.generalCutoff}</td>
                          <td className="border border-gray-300 px-4 py-2">{year.obcScStCutoff}</td>
                          <td className="border border-gray-300 px-4 py-2">{year.pwdCutoff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600 text-sm">{data.DetailedCutoffAnalysis.HistoricalCutoffTrends.note}</p>
                </div>
              </div>

              {/* Cutoff Percentile Explanation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.CutoffPercentileExplanation.title}</h3>
                <ul className="space-y-2">
                  {data.DetailedCutoffAnalysis.CutoffPercentileExplanation.explanations.map((explanation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{explanation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expected Cutoff Distribution Breakdown */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.ExpectedCutoffDistributionBreakdown.title}</h3>
                <div className="space-y-4">
                  {data.DetailedCutoffAnalysis.ExpectedCutoffDistributionBreakdown.categories.map((category, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{category.category}</h4>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scoring Strategy to Clear Cutoff */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.ScoringStrategyToClearCutoff.title}</h3>
                <ul className="space-y-2">
                  {data.DetailedCutoffAnalysis.ScoringStrategyToClearCutoff.strategies.map((strategy, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NEET 2026 Cutoff vs Rank Estimations */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.NEET2026CutoffVsRankEstimations.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Range</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Estimated Rank Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.DetailedCutoffAnalysis.NEET2026CutoffVsRankEstimations.rankEstimations.map((estimation, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{estimation.marksRange}</td>
                          <td className="border border-gray-300 px-4 py-2">{estimation.estimatedRank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Final Notes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.DetailedCutoffAnalysis.FinalNotes.title}</h3>
                <ul className="space-y-2">
                  {data.DetailedCutoffAnalysis.FinalNotes.notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )}
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-6">
            {/* Basic Counselling Process Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Counselling Process</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Quota Distribution</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>All India Quota:</span>
                        <span className="font-semibold">{data.Counselling.QuotaDistribution.AllIndiaQuota}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>State Quota:</span>
                        <span className="font-semibold">{data.Counselling.QuotaDistribution.StateQuota}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Conducted By</h3>
                    <p className="text-gray-600">{data.Counselling.ConductedBy}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselling Rounds</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {data.Counselling.Rounds.map((round, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded text-center">
                        <span className="font-medium">{round}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselling Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {data.Counselling.Process.map((step, index) => (
                      <div key={index} className="bg-blue-50 p-2 rounded text-center">
                        <span className="font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

             {/* Comprehensive Counselling Guide */}
             {data.Counselling.ComprehensiveCounsellingGuide && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.Counselling.ComprehensiveCounsellingGuide.Introduction.title}</h2>
              <p className="text-gray-600 mb-8">{data.Counselling.ComprehensiveCounsellingGuide.Introduction.description}</p>

              {/* Quota Distribution and Seat Reservations */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide.QuotaDistributionAndSeatReservations.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Quota Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage of Total Seats</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Areas Covered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Counselling.ComprehensiveCounsellingGuide?.QuotaDistributionAndSeatReservations.quotas.map((quota: { quotaCategory: string; percentage: string; areasCovered: string }, index: number) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{quota.quotaCategory}</td>
                          <td className="border border-gray-300 px-4 py-2">{quota.percentage}</td>
                          <td className="border border-gray-300 px-4 py-2">{quota.areasCovered}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Counselling Conducting Authorities */}
              <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.CounsellingConductingAuthorities.title}</h3>
                <div className="space-y-4">
                  {data.Counselling.ComprehensiveCounsellingGuide?.CounsellingConductingAuthorities.authorities.map((authority: { authority: string; responsibilities: string[] }, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{authority.authority}</h4>
                      <ul className="space-y-1">
                        {authority.responsibilities.map((responsibility: string, respIndex: number) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="text-gray-800 mr-2 mt-1">•</span>
                            <span className="text-gray-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counselling Rounds and Their Significance */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.CounsellingRoundsAndTheirSignificance.title}</h3>
                <p className="text-gray-600 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.CounsellingRoundsAndTheirSignificance.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Round Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Counselling.ComprehensiveCounsellingGuide?.CounsellingRoundsAndTheirSignificance.rounds.map((round: { roundName: string; description: string }, index: number) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{round.roundName}</td>
                          <td className="border border-gray-300 px-4 py-2">{round.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Important Notes:</h4>
                  <ul className="space-y-1">
                    {data.Counselling.ComprehensiveCounsellingGuide?.CounsellingRoundsAndTheirSignificance.importantNotes.map((note: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step-by-Step Counselling Process */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.StepByStepCounsellingProcess.title}</h3>
                <div className="space-y-4">
                  {data.Counselling.ComprehensiveCounsellingGuide?.StepByStepCounsellingProcess.steps.map((step: { step: string; description: string }, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{step.step}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Documents for Counselling */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.ImportantDocumentsForCounselling.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Document</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Counselling.ComprehensiveCounsellingGuide?.ImportantDocumentsForCounselling.documents.map((doc: { document: string; purpose: string }, index: number) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{doc.document}</td>
                          <td className="border border-gray-300 px-4 py-2">{doc.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fee Structure Overview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.FeeStructureOverview.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Counselling Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">General/OBC Registration Fee</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">SC/ST/PwD Registration Fee</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Security Deposit (Refundable)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Counselling.ComprehensiveCounsellingGuide?.FeeStructureOverview.feeStructure.map((fee: { counsellingType: string; generalOBCFee: string; scStPwdFee: string; securityDeposit: string }, index: number) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{fee.counsellingType}</td>
                          <td className="border border-gray-300 px-4 py-2">{fee.generalOBCFee}</td>
                          <td className="border border-gray-300 px-4 py-2">{fee.scStPwdFee}</td>
                          <td className="border border-gray-300 px-4 py-2">{fee.securityDeposit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Counselling Tips for Candidates */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.KeyCounsellingTipsForCandidates.title}</h3>
                <ul className="space-y-2">
                  {data.Counselling.ComprehensiveCounsellingGuide?.KeyCounsellingTipsForCandidates.tips.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-800 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Distinction Between All India Quota and State Quota Counselling */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.DistinctionBetweenAllIndiaQuotaAndStateQuotaCounselling.title}</h3>
                 <div className="overflow-x-auto">
                   <table className="w-full border-collapse border border-gray-300">
                     <thead>
                       <tr className="bg-gray-100">
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">All India Quota (AIQ)</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">State Quota</th>
                       </tr>
                     </thead>
                     <tbody>
                       {data.Counselling.ComprehensiveCounsellingGuide?.DistinctionBetweenAllIndiaQuotaAndStateQuotaCounselling.distinctions.map((distinction: { aspect: string; allIndiaQuota: string; stateQuota: string }, index: number) => (
                         <tr key={index}>
                           <td className="border border-gray-300 px-4 py-2 font-medium">{distinction.aspect}</td>
                           <td className="border border-gray-300 px-4 py-2">{distinction.allIndiaQuota}</td>
                           <td className="border border-gray-300 px-4 py-2">{distinction.stateQuota}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>

               {/* Detailed Counselling Timeline */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.DetailedCounsellingTimeline.title}</h3>
                 <div className="space-y-4">
                   {data.Counselling.ComprehensiveCounsellingGuide?.DetailedCounsellingTimeline.timeline.map((phase: { phase: string; duration: string; activities: string[] }, index: number) => (
                     <div key={index} className="bg-gray-50 p-4 rounded-lg">
                       <div className="flex justify-between items-start mb-2">
                         <h4 className="font-semibold text-gray-800">{phase.phase}</h4>
                         <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{phase.duration}</span>
                       </div>
                       <ul className="space-y-1">
                         {phase.activities.map((activity: string, actIndex: number) => (
                           <li key={actIndex} className="flex items-start">
                             <span className="text-gray-800 mr-2 mt-1">•</span>
                             <span className="text-gray-600">{activity}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   ))}
                 </div>
               </div>

               {/* State-wise Counselling Details */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.StateWiseCounsellingDetails.title}</h3>
                 <div className="overflow-x-auto">
                   <table className="w-full border-collapse border border-gray-300">
                     <thead>
                       <tr className="bg-gray-100">
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">State</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Conducting Authority</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Website</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Special Features</th>
                       </tr>
                     </thead>
                     <tbody>
                       {data.Counselling.ComprehensiveCounsellingGuide?.StateWiseCounsellingDetails.states.map((state: { state: string; conductingAuthority: string; website: string; specialFeatures: string }, index: number) => (
                         <tr key={index}>
                           <td className="border border-gray-300 px-4 py-2 font-medium">{state.state}</td>
                           <td className="border border-gray-300 px-4 py-2">{state.conductingAuthority}</td>
                           <td className="border border-gray-300 px-4 py-2 text-blue-600">{state.website}</td>
                           <td className="border border-gray-300 px-4 py-2">{state.specialFeatures}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>

               {/* Counselling Strategies and Tips */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.CounsellingStrategiesAndTips.title}</h3>
                 <div className="space-y-6">
                   {data.Counselling.ComprehensiveCounsellingGuide?.CounsellingStrategiesAndTips.strategies.map((strategy: { category: string; tips: string[] }, index: number) => (
                     <div key={index} className="bg-gray-50 p-4 rounded-lg">
                       <h4 className="font-semibold text-gray-800 mb-3">{strategy.category}</h4>
                       <ul className="space-y-2">
                         {strategy.tips.map((tip: string, tipIndex: number) => (
                           <li key={tipIndex} className="flex items-start">
                             <span className="text-gray-800 mr-2 mt-1">•</span>
                             <span className="text-gray-600">{tip}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Common Counselling Mistakes */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.CommonCounsellingMistakes.title}</h3>
                 <div className="overflow-x-auto">
                   <table className="w-full border-collapse border border-gray-300">
                     <thead>
                       <tr className="bg-gray-100">
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mistake</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Consequence</th>
                         <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Prevention</th>
                       </tr>
                     </thead>
                     <tbody>
                       {data.Counselling.ComprehensiveCounsellingGuide?.CommonCounsellingMistakes.mistakes.map((mistake: { mistake: string; consequence: string; prevention: string }, index: number) => (
                         <tr key={index}>
                           <td className="border border-gray-300 px-4 py-2 font-medium">{mistake.mistake}</td>
                           <td className="border border-gray-300 px-4 py-2 text-red-600">{mistake.consequence}</td>
                           <td className="border border-gray-300 px-4 py-2 text-green-600">{mistake.prevention}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>

               {/* Counselling Helpline and Support */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.CounsellingHelplineAndSupport.title}</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <h4 className="font-semibold text-gray-800 mb-3">Support Channels</h4>
                     <div className="space-y-3">
                       {data.Counselling.ComprehensiveCounsellingGuide?.CounsellingHelplineAndSupport.supportChannels.map((channel: { authority: string; helpline: string; email: string; workingHours: string }, index: number) => (
                         <div key={index} className="bg-gray-50 p-3 rounded-lg">
                           <h5 className="font-medium text-gray-800">{channel.authority}</h5>
                           <p className="text-sm text-gray-600">Helpline: {channel.helpline}</p>
                           <p className="text-sm text-gray-600">Email: {channel.email}</p>
                           <p className="text-sm text-gray-600">Hours: {channel.workingHours}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800 mb-3">Online Resources</h4>
                     <ul className="space-y-2">
                       {data.Counselling.ComprehensiveCounsellingGuide?.CounsellingHelplineAndSupport.onlineResources.map((resource: string, index: number) => (
                         <li key={index} className="flex items-start">
                           <span className="text-gray-800 mr-2 mt-1">•</span>
                           <span className="text-gray-600 text-sm">{resource}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Post-Counselling Process */}
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.Counselling.ComprehensiveCounsellingGuide?.PostCounsellingProcess.title}</h3>
                 <div className="space-y-4">
                   {data.Counselling.ComprehensiveCounsellingGuide?.PostCounsellingProcess.steps.map((step: { step: string; description: string }, index: number) => (
                     <div key={index} className="bg-gray-50 p-4 rounded-lg">
                       <h4 className="font-semibold text-gray-800 mb-2">{step.step}</h4>
                       <p className="text-gray-600">{step.description}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
             )}
          </div>
        );

      case 'seats':
        return (
          <div className="space-y-6">
            {/* Basic Seats Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET 2026 Seats Availability</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">MBBS</h3>
                  <p className="text-3xl font-bold text-blue-600">{data.SeatsAvailability.MBBS.toLocaleString()}</p>
                  <p className="text-sm text-blue-700">Total Seats</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">BDS</h3>
                  <p className="text-3xl font-bold text-green-600">{data.SeatsAvailability.BDS.toLocaleString()}</p>
                  <p className="text-sm text-green-700">Total Seats</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">BAMS</h3>
                  <p className="text-3xl font-bold text-purple-600">{data.SeatsAvailability.BAMS.toLocaleString()}</p>
                  <p className="text-sm text-purple-700">Total Seats</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">BVSc & AH</h3>
                  <p className="text-3xl font-bold text-orange-600">{data.SeatsAvailability["BVSc&AH"]}</p>
                  <p className="text-sm text-orange-700">Total Seats</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">AYUSH/Paramedical</h3>
                  <p className="text-3xl font-bold text-red-600">{data.SeatsAvailability["AYUSH/Paramedical"]}</p>
                  <p className="text-sm text-red-700">Total Seats</p>
                </div>
              </div>
            </div>

            {/* Comprehensive Seats Guide */}
            {data.ComprehensiveSeatsGuide && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.ComprehensiveSeatsGuide.Introduction.title}</h2>
                <p className="text-gray-600 mb-8">{data.ComprehensiveSeatsGuide.Introduction.description}</p>

                {/* Total Seats Availability */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.TotalSeatsAvailability.title}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Course</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total Seats Available</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.ComprehensiveSeatsGuide.TotalSeatsAvailability.courses.map((course, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{course.course}</td>
                            <td className="border border-gray-300 px-4 py-2">{course.totalSeats}</td>
                            <td className="border border-gray-300 px-4 py-2">{course.remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MBBS Seats Detailed Breakdown */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.title}</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Overview</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600"><span className="font-medium">Total MBBS Seats:</span> {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.overview.totalMBBSSeats}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Number of Medical Colleges:</span> {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.overview.numberOfMedicalColleges}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600"><span className="font-medium">Government Colleges:</span> {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.overview.distribution.governmentColleges}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Private & Deemed Universities:</span> {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.overview.distribution.privateAndDeemedUniversities}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">AIIMS & JIPMER:</span> {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.overview.distribution.aiimsAndJipmer}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">State-wise Highest MBBS Seats</h4>
                      <div className="space-y-2">
                        {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.stateWiseHighestMBBSSeats.map((state, index) => (
                          <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="font-medium">{state.state}</span>
                            <span className="text-gray-600">{state.seats}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Smaller States and UTs</h4>
                      <div className="space-y-2">
                        {data.ComprehensiveSeatsGuide.MBBSSeatsDetailedBreakdown.smallerStatesAndUTs.map((state, index) => (
                          <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="font-medium">{state.state}</span>
                            <span className="text-gray-600">{state.seats}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* BDS Seats Availability */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.BDSSeatsAvailability.title}</h3>
                  <p className="text-gray-600">{data.ComprehensiveSeatsGuide.BDSSeatsAvailability.description}</p>
                </div>

                {/* AYUSH Seats */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.AYUSHSeats.title}</h3>
                  <div className="space-y-3">
                    {data.ComprehensiveSeatsGuide.AYUSHSeats.breakdown.map((course, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800">{course.course}</h4>
                        <p className="text-gray-600">{course.seats}</p>
                        {course.description && <p className="text-sm text-gray-500">{course.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reservation Policy */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.ReservationPolicy.title}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reservation Percentage</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reservation Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.ComprehensiveSeatsGuide.ReservationPolicy.categories.map((category, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{category.category}</td>
                            <td className="border border-gray-300 px-4 py-2">{category.percentage}</td>
                            <td className="border border-gray-300 px-4 py-2">{category.reservationType}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Explanation:</h4>
                    <ul className="space-y-1">
                      <li className="text-gray-600">• <span className="font-medium">Vertical Reservation:</span> {data.ComprehensiveSeatsGuide.ReservationPolicy.explanation.verticalReservation}</li>
                      <li className="text-gray-600">• <span className="font-medium">Horizontal Reservation:</span> {data.ComprehensiveSeatsGuide.ReservationPolicy.explanation.horizontalReservation}</li>
                    </ul>
                  </div>
                </div>

                {/* Seat Quota Divisions */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.SeatQuotaDivisions.title}</h3>
                  <div className="space-y-3">
                    {data.ComprehensiveSeatsGuide.SeatQuotaDivisions.quotas.map((quota, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800">{quota.quota}</h4>
                          <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{quota.percentage}</span>
                        </div>
                        <p className="text-gray-600">{quota.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Trends in Seat Increase */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.RecentTrendsInSeatIncrease.title}</h3>
                  <ul className="space-y-2">
                    {data.ComprehensiveSeatsGuide.RecentTrendsInSeatIncrease.trends.map((trend, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Seat Availability Impact on Admission */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.SeatAvailabilityImpactOnAdmission.title}</h3>
                  <ul className="space-y-2">
                    {data.ComprehensiveSeatsGuide.SeatAvailabilityImpactOnAdmission.impacts.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Summary Table */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.SummaryTable.title}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Type</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Approximate Seats (MBBS)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.ComprehensiveSeatsGuide.SummaryTable.seatTypes.map((seatType, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 font-medium">{seatType.seatType}</td>
                            <td className="border border-gray-300 px-4 py-2">{seatType.percentage}</td>
                            <td className="border border-gray-300 px-4 py-2">{seatType.approximateSeats}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Insights */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.ComprehensiveSeatsGuide.AdditionalInsights.title}</h3>
                  <ul className="space-y-2">
                    {data.ComprehensiveSeatsGuide.AdditionalInsights.insights.map((insight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-800 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-gray-600">StudentHub</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/nta-logo.png" 
                  alt="NTA Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  NEET 2026: Exam Dates, Pattern, Syllabus, Previous Year Papers, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-medium">#NEET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Container */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`whitespace-nowrap px-4 py-2 font-semibold text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-gray-800 border-b-2 border-gray-800 bg-white rounded-t-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Main Content Area */}
            <div>
              {renderTabContent()}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">MBBS/BDS Admissions OPEN</h3>
              
              {/* AIIMS Delhi */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/aiims-logo.jpg" alt="AIIMS" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">AIIMS Delhi MBBS</h4>
                    <p className="text-xs text-gray-600">All India Institute of Medical Sciences</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Top Medical Institute | 100+ Seats | NEET Based Admission | Government Funded</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* Maulana Azad Medical College */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/mamc-logo.jpg" alt="MAMC" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">MAMC Delhi MBBS</h4>
                    <p className="text-xs text-gray-600">Maulana Azad Medical College</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Government College | 200+ Seats | Delhi Quota Available | NEET Based</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* King George Medical University */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/kgmu-logo.png" alt="KGMU" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">KGMU Lucknow MBBS</h4>
                    <p className="text-xs text-gray-600">King George Medical University</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Uttar Pradesh State | 150+ Seats | Government Funded | NEET Based</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* Christian Medical College */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/cmc-vellore-logo.jpeg" alt="CMC" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">CMC Vellore MBBS</h4>
                    <p className="text-xs text-gray-600">Christian Medical College</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Private Deemed University | 100+ Seats | NEET Based | Excellent Placements</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
