// Service to load college data from JSON files
export interface IITRoorkeeData {
  Name: string;
  Location: {
    City: string;
    District: string;
    State: string;
    Country: string;
    Pin: string;
    CampusAreaAcres: number;
    Branches: Array<{
      Name: string;
      Location?: string;
      Specialization?: string;
      Focus?: string;
    }>;
  };
  Established: {
    Year: number;
    OriginalName: string;
    Renamed: Array<{
      Year: number;
      Name: string;
    }>;
    HistoricalSignificance: string;
  };
  UniversityType: string[];
  About: {
    Overview: string;
    StudentStrength: string;
    MajorEvents: string[];
    ResearchFocus: string[];
    StartupsValuationINR: number;
    GlobalCollaborations: string[];
    SocialInitiatives: string[];
  };
  Rankings: {
    NIRF2025: {
      Overall: number;
      Engineering: number;
      ArchitecturePlanning: number;
    };
    NIRF2024: {
      Overall: number;
      Innovation: number;
    };
    QSWorld2026: number;
    QSAsia2025: number;
    IndiaTodayEngineering2024: number;
    THEEngineering2020Band: string;
    ARIIA2021: string;
  };
  CoursesAndFees: {
    Undergraduate: {
      BTech: {
        Branches: string[];
        DurationYears: number;
        Entrance: string[];
        Seats: number;
        FirstYearFeeINR: number;
        TotalFeesINRApprox: number;
      };
      BArch: {
        DurationYears: number;
        Entrance: string[];
        Seats: number;
        FirstYearFeeINR: number;
        TotalFeesINRApprox: number;
      };
      BDes: {
        DurationYears: number;
        Entrance: string[];
        Seats: number;
        FirstYearFeeINR: number;
        TotalFeesINRApprox: number;
      };
    };
    Postgraduate: {
      MTech: {
        Specializations: number;
        DurationYears: number;
        Entrance: string[];
        FirstYearFeeINR: number;
        SeatsVaries: boolean;
      };
      MArchMPlanMDes: {
        DurationYears: number;
        Entrance: string[];
        SeatsVaries: boolean;
        FeeInformation: string;
      };
      MBA: {
        DurationYears: number;
        Entrance: string[];
        Seats: number;
        FirstYearFeeINR: number;
      };
      MSc: {
        Disciplines: string[];
        DurationYears: number;
        Entrance: string[];
        FirstYearFeeINR: number;
        Seats: number;
      };
    };
    Doctoral: {
      PhD: {
        Programs: number;
        Entrance: string[];
        TypicalDurationYears: string;
        FeeINRPerYear: number;
        SeatsMoreThan: number;
      };
    };
    HostelFeeINRAnnual: {
      Minimum: number;
      Maximum: number;
      Note: string;
    };
  };
  AdmissionProcessAndEntranceExams: {
    Undergraduate: {
      BTechBArch: {
        Exam: string;
        Counseling: string;
        AdditionalTestForBArch: string;
      };
      BDes: {
        Exam: string;
        Counseling: string;
      };
    };
    Postgraduate: {
      MTechMArchMPlanMDes: {
        Exam: string;
        Counseling: string;
        AdditionalProcesses: string;
      };
      MBA: {
        Exam: string;
        AdditionalSelection: string[];
      };
      MSc: {
        Exam: string[];
      };
    };
    Doctoral: {
      PhD: {
        Exam: string[];
        Selection: string;
        AdditionalNotes: string;
      };
    };
    ForeignNational: {
      Requirement: string[];
      AdditionalProcess: string;
    };
    ReservationPolicy: string;
    ApplicationMode: string;
  };
  CutoffInformation: {
    JEEAdvanced2025: {
      BTechCSEClosingAIR: number;
      DataScienceAIClosingAIR: number;
      ECEClosingAIR: number;
      MechEngClosingAIR: number;
      ElectEngClosingAIR: number;
      CivilEngClosingAIR: number;
    };
    BArchAAT2025ClosingRank: number;
    BDesUCEED2025ClosingRanks: {
      General: number;
      OBC: number;
    };
    JAMMSc2025Cutoffs: {
      Economics: number[];
      Physics: number[];
      Mathematics: number[];
    };
    CATMBA2025Cutoffs: {
      GeneralPercentile: number;
      OBCPercentile: number;
      SCSTPercentileMin: number;
    };
    AdditionalDetails: string;
  };
  Placements: {
    Year2024: {
      TotalOffers: number;
      Recruiters: number;
      HighestPackageINR: number;
      HighestDomesticPackageINR: number;
      OverallAveragePackageINR: number;
      CSEAveragePackageINR: number;
      ECEAveragePackageINR: number;
      "MBA median package INR": number;
      PPOs: number;
      TopRecruiters: string[];
      JobProfiles: string[];
      PlacementPreparation: string[];
    };
  };
  Facilities: {
    Hostels: {
      Number: number;
      Types: string[];
      Amenities: string[];
    };
    Library: {
      Name: string;
      AreaSqFt: number;
      BookCount: number;
      EJournalsCount: number;
      Features: string[];
    };
    Laboratories: {
      Quantity: number;
      FocusAreas: string[];
      Equipment: string[];
    };
    SportsFacilities: {
      Features: string[];
    };
    Medical: {
      FacilityName: string;
      Services: string[];
    };
    Dining: {
      Outlets: string[];
      Services: string[];
    };
    OtherAmenities: string[];
    StudentClubs: {
      Number: number;
      Types: string[];
    };
  };
  FacultyAndDepartments: {
    DepartmentsCount: number;
    DepartmentsList: string[];
    ResearchCenters: string[];
    Strength: {
      FacultyCount: number;
      PhDs: string;
      Patents2024: number;
      ResearchFundsINR2024: number;
    };
    Collaborations: string[];
    FacultyActivities: string[];
    StudentFeedback: string;
  };
  Scholarships: {
    MeritCumMeans: {
      IncomeLessThanINR_Lax: number;
      FullFeeWaiver: boolean;
      IncomeBetweenINR_Lax: number;
      IncomeUpToINR_Lax: number;
      TwoThirdFeeWaiver: boolean;
    };
    JamesThomasonScholarship: {
      EligibilityJEEAdvancedRank: number;
      StipendINRPerMonth: number;
      MinimumCGPA: number;
    };
    OtherScholarships: string[];
    Coverage: string[];
    Application: string[];
  };
  ReviewsAndRatings: {
    CollegeDuniaRating: number;
    CollegeDuniaReviewsCount: number;
    Careers360Rating: number;
    Strengths: string[];
    Weaknesses: string[];
    ReturnOnInvestment: string;
  };
  StudentLifeAndLifestyle: {
    Demographics: string;
    CulturalTraditions: string[];
    Festivals: string[];
    ClubsAndSocieties: string[];
    OutdoorActivities: string[];
    StudentGovernance: string;
    WellbeingFacilities: string[];
    Community: string;
  };
  HistoricalBackground: {
    FoundationYear: number;
    Founder: string;
    InitialFocus: string;
    Evolution: string[];
    Legacy: string;
    Heritage: string;
  };
  ResearchAndInnovation: {
    FocusAreas: string[];
    PatentsFiled2024: number;
    ResearchFundingINR2024: number;
    NotableInnovations: string;
    Startups: {
      Number: number;
      AggregateValuationINR: number;
    };
    Collaborations: string[];
    WomenInResearch: {
      WomenPhDsAwarded2025: number;
      FellowshipsForWomenResearchers: boolean;
    };
  };
  NewsAndUpdates: Array<{
    Event: string;
    Date?: string;
    Details?: string;
    Duration?: string;
    StartDate?: string;
    EndDate?: string;
    Theme?: string;
    Focus?: string;
    RecurringEvents?: string[];
  }>;
  OfficialContactInfo: {
    Website: string;
    Address: string;
    Phone: string;
    Emails: {
      Registrar: string;
      Admissions: string;
      PlacementCell: string;
    };
  };
}

// Function to load IIT Roorkee data
export const loadIITRoorkeeData = async (): Promise<IITRoorkeeData> => {
  try {
    // Import the JSON data
    const response = await fetch('/data/colleges/iit_roorkee.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Roorkee data');
    }
    const data = await response.json();
    return data as IITRoorkeeData;
  } catch (error) {
    console.error('Error loading IIT Roorkee data:', error);
    throw error;
  }
};

// Function to get college data by slug
export const getCollegeDataBySlug = async (slug: string): Promise<IITRoorkeeData | null> => {
  if (slug === 'iit-roorkee') {
    return await loadIITRoorkeeData();
  }
  return null;
};
