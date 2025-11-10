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

// Amity University data uses the same interface structure
export type AmityNoidaData = IITRoorkeeData;

// BITS Pilani data uses the same interface structure
export type BITSPilaniData = IITRoorkeeData;

// SRM data uses the same interface structure
export type SRMData = IITRoorkeeData;

// Thapar data uses the same interface structure
export type ThaparData = IITRoorkeeData;

// Amrita Coimbatore data uses the same interface structure
export type AmritaCoimbatoreData = IITRoorkeeData;

// Function to load Amity University Noida data
export const loadAmityNoidaData = async (): Promise<AmityNoidaData> => {
  try {
    const response = await fetch('/data/colleges/amity_noida.json');
    if (!response.ok) {
      throw new Error('Failed to load Amity University Noida data');
    }
    const data = await response.json();
    return data as AmityNoidaData;
  } catch (error) {
    console.error('Error loading Amity University Noida data:', error);
    throw error;
  }
};

// Function to load BITS Pilani data
export const loadBITSPilaniData = async (): Promise<BITSPilaniData> => {
  try {
    const response = await fetch('/data/colleges/bits_pilani.json');
    if (!response.ok) {
      throw new Error('Failed to load BITS Pilani data');
    }
    const data = await response.json();
    return data as BITSPilaniData;
  } catch (error) {
    console.error('Error loading BITS Pilani data:', error);
    throw error;
  }
};

// Function to load SRM data
export const loadSRMData = async (): Promise<SRMData> => {
  try {
    const response = await fetch('/data/colleges/srm.json');
    if (!response.ok) {
      throw new Error('Failed to load SRM data');
    }
    const data = await response.json();
    return data as SRMData;
  } catch (error) {
    console.error('Error loading SRM data:', error);
    throw error;
  }
};

// Function to load Thapar data
export const loadThaparData = async (): Promise<ThaparData> => {
  try {
    const response = await fetch('/data/colleges/thapar.json');
    if (!response.ok) {
      throw new Error('Failed to load Thapar data');
    }
    const data = await response.json();
    return data as ThaparData;
  } catch (error) {
    console.error('Error loading Thapar data:', error);
    throw error;
  }
};

// Function to load Amrita Coimbatore data
export const loadAmritaCoimbatoreData = async (): Promise<AmritaCoimbatoreData> => {
  try {
    const response = await fetch('/data/colleges/amrita_coimbatore.json');
    if (!response.ok) {
      throw new Error('Failed to load Amrita Coimbatore data');
    }
    const data = await response.json();
    return data as AmritaCoimbatoreData;
  } catch (error) {
    console.error('Error loading Amrita Coimbatore data:', error);
    throw error;
  }
};

// SOA data uses the same interface structure
export type SOAData = IITRoorkeeData;

// Function to load SOA data
export const loadSOAData = async (): Promise<SOAData> => {
  try {
    const response = await fetch('/data/colleges/soa_bhubaneswar.json');
    if (!response.ok) {
      throw new Error('Failed to load SOA data');
    }
    const data = await response.json();
    return data as SOAData;
  } catch (error) {
    console.error('Error loading SOA data:', error);
    throw error;
  }
};

// Chandigarh University data uses the same interface structure
export type ChandigarhUniversityData = IITRoorkeeData;

// Function to load Chandigarh University data
export const loadChandigarhUniversityData = async (): Promise<ChandigarhUniversityData> => {
  try {
    const response = await fetch('/data/colleges/chandigarh_university.json');
    if (!response.ok) {
      throw new Error('Failed to load Chandigarh University data');
    }
    const data = await response.json();
    return data as ChandigarhUniversityData;
  } catch (error) {
    console.error('Error loading Chandigarh University data:', error);
    throw error;
  }
};

// KL University data uses the same interface structure
export type KLUniversityData = IITRoorkeeData;

// Function to load KL University data
export const loadKLUniversityData = async (): Promise<KLUniversityData> => {
  try {
    const response = await fetch('/data/colleges/kl_university.json');
    if (!response.ok) {
      throw new Error('Failed to load KL University data');
    }
    const data = await response.json();
    return data as KLUniversityData;
  } catch (error) {
    console.error('Error loading KL University data:', error);
    throw error;
  }
};

// Kalasalingam Academy data uses the same interface structure
export type KalasalingamAcademyData = IITRoorkeeData;

// Function to load Kalasalingam Academy data
export const loadKalasalingamAcademyData = async (): Promise<KalasalingamAcademyData> => {
  try {
    const response = await fetch('/data/colleges/kalasalingam_academy.json');
    if (!response.ok) {
      throw new Error('Failed to load Kalasalingam Academy data');
    }
    const data = await response.json();
    return data as KalasalingamAcademyData;
  } catch (error) {
    console.error('Error loading Kalasalingam Academy data:', error);
    throw error;
  }
};

// VIT Vellore data uses the same interface structure
export type VitVelloreData = IITRoorkeeData;

// Function to load VIT Vellore data
export const loadVitVelloreData = async (): Promise<VitVelloreData> => {
  try {
    const response = await fetch('/data/colleges/vit_vellore.json');
    if (!response.ok) {
      throw new Error('Failed to load VIT Vellore data');
    }
    const data = await response.json();
    return data as VitVelloreData;
  } catch (error) {
    console.error('Error loading VIT Vellore data:', error);
    throw error;
  }
};

// Function to get college data by slug
export const getCollegeDataBySlug = async (slug: string): Promise<IITRoorkeeData | null> => {
  if (slug === 'iit-roorkee') {
    return await loadIITRoorkeeData();
  }
  if (slug === 'amity-noida') {
    return await loadAmityNoidaData();
  }
  if (slug === 'bits-pilani') {
    return await loadBITSPilaniData();
  }
  if (slug === 'srm' || slug === 'srmist') {
    return await loadSRMData();
  }
  if (slug === 'thapar' || slug === 'tiet') {
    return await loadThaparData();
  }
  if (slug === 'amrita-coimbatore' || slug === 'amrita') {
    return await loadAmritaCoimbatoreData();
  }
  if (slug === 'soa-bhubaneswar' || slug === 'soa') {
    return await loadSOAData();
  }
  if (slug === 'chandigarh-university' || slug === 'cu') {
    return await loadChandigarhUniversityData();
  }
  if (slug === 'kl-university' || slug === 'klef' || slug === 'klu') {
    return await loadKLUniversityData();
  }
  if (slug === 'kalasalingam' || slug === 'kalasalingam-academy' || slug === 'kare') {
    return await loadKalasalingamAcademyData();
  }
  if (slug === 'vit-vellore' || slug === 'vit') {
    return await loadVitVelloreData();
  }
  if (slug === 'nit-durgapur') {
    return await loadNITDurgapurData();
  }
  if (slug === 'nit-jamshedpur') {
    return await loadNITJamshedpurData();
  }
  if (slug === 'nit-patna' || slug === 'nitp') {
    return await loadNITPatnaData();
  }
  return null;
};

// IIT Madras uses same structure as IIT Roorkee
export type IITMadrasData = IITRoorkeeData;

// Function to load IIT Madras data
export const loadIITMadrasData = async (): Promise<IITMadrasData> => {
  try {
    const response = await fetch('/data/colleges/iit_madras.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Madras data');
    }
    const data = await response.json();
    return data as IITMadrasData;
  } catch (error) {
    console.error('Error loading IIT Madras data:', error);
    throw error;
  }
};

// IIT Bombay uses same structure as IIT Roorkee
export type IITBombayData = IITRoorkeeData;

// Function to load IIT Bombay data
export const loadIITBombayData = async (): Promise<IITBombayData> => {
  try {
    const response = await fetch('/data/colleges/iit_bombay.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Bombay data');
    }
    const data = await response.json();
    return data as IITBombayData;
  } catch (error) {
    console.error('Error loading IIT Bombay data:', error);
    throw error;
  }
};

// IIT Delhi uses same structure as IIT Roorkee
export type IITDelhiData = IITRoorkeeData;

// Function to load IIT Delhi data
export const loadIITDelhiData = async (): Promise<IITDelhiData> => {
  try {
    const response = await fetch('/data/colleges/iit_delhi.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Delhi data');
    }
    const data = await response.json();
    return data as IITDelhiData;
  } catch (error) {
    console.error('Error loading IIT Delhi data:', error);
    throw error;
  }
};

// IIT Kanpur uses same structure as IIT Roorkee
export type IITKanpurData = IITRoorkeeData;

// Function to load IIT Kanpur data
export const loadIITKanpurData = async (): Promise<IITKanpurData> => {
  try {
    const response = await fetch('/data/colleges/iit_kanpur.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Kanpur data');
    }
    const data = await response.json();
    return data as IITKanpurData;
  } catch (error) {
    console.error('Error loading IIT Kanpur data:', error);
    throw error;
  }
};

// IIT Kharagpur uses same structure as IIT Roorkee
export type IITKharagpurData = IITRoorkeeData;

// Function to load IIT Kharagpur data
export const loadIITKharagpurData = async (): Promise<IITKharagpurData> => {
  try {
    const response = await fetch('/data/colleges/iit_kharagpur.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Kharagpur data');
    }
    const data = await response.json();
    return data as IITKharagpurData;
  } catch (error) {
    console.error('Error loading IIT Kharagpur data:', error);
    throw error;
  }
};

// IIT Hyderabad uses same structure as IIT Roorkee
export type IITHyderabadData = IITRoorkeeData;

// Function to load IIT Hyderabad data
export const loadIITHyderabadData = async (): Promise<IITHyderabadData> => {
  try {
    const response = await fetch('/data/colleges/iit_hyderabad.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Hyderabad data');
    }
    const data = await response.json();
    return data as IITHyderabadData;
  } catch (error) {
    console.error('Error loading IIT Hyderabad data:', error);
    throw error;
  }
};

// IIT Guwahati uses same structure as IIT Roorkee
export type IITGuwahatiData = IITRoorkeeData;

// Function to load IIT Guwahati data
export const loadIITGuwahatiData = async (): Promise<IITGuwahatiData> => {
  try {
    const response = await fetch('/data/colleges/iit_guwahati.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT Guwahati data');
    }
    const data = await response.json();
    return data as IITGuwahatiData;
  } catch (error) {
    console.error('Error loading IIT Guwahati data:', error);
    throw error;
  }
};

// IIT BHU Varanasi uses same structure as IIT Roorkee
export type IITBHUVaranasiData = IITRoorkeeData;

// Function to load IIT BHU Varanasi data
export const loadIITBHUVaranasiData = async (): Promise<IITBHUVaranasiData> => {
  try {
    const response = await fetch('/data/colleges/iit_bhu_varanasi.json');
    if (!response.ok) {
      throw new Error('Failed to load IIT BHU Varanasi data');
    }
    const data = await response.json();
    return data as IITBHUVaranasiData;
  } catch (error) {
    console.error('Error loading IIT BHU Varanasi data:', error);
    throw error;
  }
};

// NIT Trichy uses same structure as IIT Roorkee
export type NITTrichyData = IITRoorkeeData;

// Function to load NIT Trichy data
export const loadNITTrichyData = async (): Promise<NITTrichyData> => {
  try {
    const response = await fetch('/data/colleges/nit_trichy.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Trichy data');
    }
    const data = await response.json();
    return data as NITTrichyData;
  } catch (error) {
    console.error('Error loading NIT Trichy data:', error);
    throw error;
  }
};

// NIT Warangal uses same structure as IIT Roorkee
export type NITWarangalData = IITRoorkeeData;

// Function to load NIT Warangal data
export const loadNITWarangalData = async (): Promise<NITWarangalData> => {
  try {
    const response = await fetch('/data/colleges/nit_warangal.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Warangal data');
    }
    const data = await response.json();
    return data as NITWarangalData;
  } catch (error) {
    console.error('Error loading NIT Warangal data:', error);
    throw error;
  }
};

// NIT Calicut uses same structure as IIT Roorkee
export type NITCalicutData = IITRoorkeeData;

// Function to load NIT Calicut data
export const loadNITCalicutData = async (): Promise<NITCalicutData> => {
  try {
    const response = await fetch('/data/colleges/nit_calicut.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Calicut data');
    }
    const data = await response.json();
    return data as NITCalicutData;
  } catch (error) {
    console.error('Error loading NIT Calicut data:', error);
    throw error;
  }
};

// NIT Agartala uses same structure as IIT Roorkee
export type NITAgartalaData = IITRoorkeeData;

// Function to load NIT Agartala data
export const loadNITAgartalaData = async (): Promise<NITAgartalaData> => {
  try {
    const response = await fetch('/data/colleges/nit_agartala.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Agartala data');
    }
    const data = await response.json();
    return data as NITAgartalaData;
  } catch (error) {
    console.error('Error loading NIT Agartala data:', error);
    throw error;
  }
};

// NIT Durgapur uses same structure as IIT Roorkee
export type NITDurgapurData = IITRoorkeeData;

// Function to load NIT Durgapur data
export const loadNITDurgapurData = async (): Promise<NITDurgapurData> => {
  try {
    const response = await fetch('/data/colleges/nit_durgapur.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Durgapur data');
    }
    const data = await response.json();
    return data as NITDurgapurData;
  } catch (error) {
    console.error('Error loading NIT Durgapur data:', error);
    throw error;
  }
};

// NIT Jamshedpur uses same structure as IIT Roorkee
export type NITJamshedpurData = IITRoorkeeData;

// Function to load NIT Jamshedpur data
export const loadNITJamshedpurData = async (): Promise<NITJamshedpurData> => {
  try {
    const response = await fetch('/data/colleges/nit_jamshedpur.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Jamshedpur data');
    }
    const data = await response.json();
    return data as NITJamshedpurData;
  } catch (error) {
    console.error('Error loading NIT Jamshedpur data:', error);
    throw error;
  }
};

// NIT Silchar uses same structure as IIT Roorkee
export type NITSilcharData = IITRoorkeeData;

// Function to load NIT Silchar data
export const loadNITSilcharData = async (): Promise<NITSilcharData> => {
  try {
    const response = await fetch('/data/colleges/nit_silchar.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Silchar data');
    }
    const data = await response.json();
    return data as NITSilcharData;
  } catch (error) {
    console.error('Error loading NIT Silchar data:', error);
    throw error;
  }
};

// NIT Delhi uses same structure as IIT Roorkee
export type NITDelhiData = IITRoorkeeData;

// Function to load NIT Delhi data
export const loadNITDelhiData = async (): Promise<NITDelhiData> => {
  try {
    const response = await fetch('/data/colleges/nit_delhi.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Delhi data');
    }
    const data = await response.json();
    return data as NITDelhiData;
  } catch (error) {
    console.error('Error loading NIT Delhi data:', error);
    throw error;
  }
};

// NIT Jalandhar uses same structure as IIT Roorkee
export type NITJalandharData = IITRoorkeeData;

// Function to load NIT Jalandhar data
export const loadNITJalandharData = async (): Promise<NITJalandharData> => {
  try {
    const response = await fetch('/data/colleges/nit_jalandhar.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Jalandhar data');
    }
    const data = await response.json();
    return data as NITJalandharData;
  } catch (error) {
    console.error('Error loading NIT Jalandhar data:', error);
    throw error;
  }
};

// NIT Kurukshetra uses same structure as IIT Roorkee
export type NITKurukshetraData = IITRoorkeeData;

// Function to load NIT Kurukshetra data
export const loadNITKurukshetraData = async (): Promise<NITKurukshetraData> => {
  try {
    const response = await fetch('/data/colleges/nit_kurukshetra.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Kurukshetra data');
    }
    const data = await response.json();
    return data as NITKurukshetraData;
  } catch (error) {
    console.error('Error loading NIT Kurukshetra data:', error);
    throw error;
  }
};

// NIT Patna uses same structure as IIT Roorkee
export type NITPatnaData = IITRoorkeeData;

// Function to load NIT Patna data
export const loadNITPatnaData = async (): Promise<NITPatnaData> => {
  try {
    const response = await fetch('/data/colleges/nit_patna.json');
    if (!response.ok) {
      throw new Error('Failed to load NIT Patna data');
    }
    const data = await response.json();
    return data as NITPatnaData;
  } catch (error) {
    console.error('Error loading NIT Patna data:', error);
    throw error;
  }
};

// Lightweight loader for IIT Madras textual content split into tab sections (legacy support)
export interface IITMadrasSections {
  overview: string;
  courses: string;
  admissions: string;
  placements: string;
  rankings: string; // may be empty if not present in text
  facilities: string; // may be empty if not present in text
  faculty: string; // may be empty if not present in text
  reviews: string; // may be empty if not present in text
  contact: string; // may be empty if not present in text
}

export const loadIITMadrasSections = async (): Promise<IITMadrasSections> => {
  const response = await fetch('/data/colleges/iit_madras.txt');
  if (!response.ok) {
    throw new Error('Failed to load IIT Madras text');
  }
  const text = await response.text();

  // Helper to extract content between named anchors
  const extract = (name: string, nextNames: string[]): string => {
    const startToken = `<a name="${name}"></a>`;
    const startIdx = text.indexOf(startToken);
    if (startIdx === -1) return '';
    const afterStart = startIdx + startToken.length;
    let endIdx = text.length;
    for (const next of nextNames) {
      const token = `<a name="${next}"></a>`;
      const idx = text.indexOf(token, afterStart);
      if (idx !== -1 && idx < endIdx) endIdx = idx;
    }
    return text.slice(afterStart, endIdx).trim();
  };

  const overview = extract('overview', ['courses', 'admissions', 'placements', 'rankings', 'facilities', 'faculty', 'reviews', 'contact']);
  const courses = extract('courses', ['admissions', 'placements', 'rankings', 'facilities', 'faculty', 'reviews', 'contact']);
  const admissions = extract('admissions', ['placements', 'rankings', 'facilities', 'faculty', 'reviews', 'contact']);
  const placements = extract('placements', ['rankings', 'facilities', 'faculty', 'reviews', 'contact']);
  const rankings = extract('rankings', ['facilities', 'faculty', 'reviews', 'contact']);
  const facilities = extract('facilities', ['faculty', 'reviews', 'contact']);
  const faculty = extract('faculty', ['reviews', 'contact']);
  const reviews = extract('reviews', ['contact']);
  const contact = extract('contact', []);

  return { overview, courses, admissions, placements, rankings, facilities, faculty, reviews, contact };
};
