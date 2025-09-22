import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../StudentHub_Frontend/.env' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   SUPABASE_URL:', supabaseUrl ? '✅' : '❌');
  console.error('   SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✅' : '❌');
  console.error('\nPlease ensure your .env file contains both variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Synthetic data for 2025 papers
const papers = [
  {
    exam: 'JEE Mains',
    year: 2025,
    title: 'JEE Mains - 2025 Synthetic Paper'
  },
  {
    exam: 'JEE Advanced',
    year: 2025,
    title: 'JEE Advanced - 2025 Synthetic Paper'
  },
  {
    exam: 'EAMCET',
    year: 2025,
    title: 'EAMCET - 2025 Synthetic Paper'
  },
  {
    exam: 'NEET',
    year: 2025,
    title: 'NEET - 2025 Synthetic Paper'
  }
];

// Topic mapping for different exams
const topicMappings = {
  'JEE Mains': {
    'Mathematics': ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Probability'],
    'Physics': ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
    'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Chemical Bonding', 'Thermodynamics']
  },
  'JEE Advanced': {
    'Mathematics': ['Advanced Calculus', 'Linear Algebra', 'Complex Numbers', 'Differential Equations', 'Number Theory'],
    'Physics': ['Advanced Mechanics', 'Quantum Mechanics', 'Electromagnetic Theory', 'Statistical Mechanics', 'Relativity'],
    'Chemistry': ['Advanced Organic', 'Coordination Chemistry', 'Chemical Kinetics', 'Electrochemistry', 'Surface Chemistry']
  },
  'EAMCET': {
    'Mathematics': ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Probability'],
    'Physics': ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
    'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Chemical Bonding', 'Thermodynamics']
  },
  'NEET': {
    'Biology': ['Cell Biology', 'Genetics', 'Ecology', 'Human Physiology', 'Plant Physiology'],
    'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Chemical Bonding', 'Biochemistry'],
    'Physics': ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics']
  }
};

// Generate synthetic questions
function generateQuestions(exam, paperId) {
  const subjects = Object.keys(topicMappings[exam]);
  const questions = [];
  
  // 7 single choice questions
  for (let i = 1; i <= 7; i++) {
    const subject = subjects[(i - 1) % subjects.length];
    const topics = topicMappings[exam][subject];
    const topic = topics[(i - 1) % topics.length];
    
    questions.push({
      paper_id: paperId,
      qnum: i,
      type: 'single',
      subject,
      topic,
      question_text: `${exam} Question ${i}: What is the correct answer for this synthetic question?`,
      marks: 4
    });
  }
  
  // 2 multi-choice questions
  for (let i = 8; i <= 9; i++) {
    const subject = subjects[(i - 1) % subjects.length];
    const topics = topicMappings[exam][subject];
    const topic = topics[(i - 1) % topics.length];
    
    questions.push({
      paper_id: paperId,
      qnum: i,
      type: 'multi',
      subject,
      topic,
      question_text: `${exam} Question ${i}: Which of the following are correct? (Select all that apply)`,
      marks: 4
    });
  }
  
  // 1 numeric question
  const subject = subjects[0];
  const topics = topicMappings[exam][subject];
  const topic = topics[0];
  
  questions.push({
    paper_id: paperId,
    qnum: 10,
    type: 'numeric',
    subject,
    topic,
    question_text: `${exam} Question 10: Calculate the numeric value (round to 2 decimal places)`,
    marks: 4
  });
  
  return questions;
}

// Generate choices for questions
function generateChoices(questions) {
  const choices = [];
  
  questions.forEach(question => {
    if (question.type === 'single' || question.type === 'multi') {
      // Generate 4 choices A-D
      ['A', 'B', 'C', 'D'].forEach((choice, index) => {
        choices.push({
          question_id: question.id,
          choice_label: choice,
          choice_text: `Option ${choice}: Synthetic answer choice ${index + 1}`,
          is_correct: question.type === 'single' ? index === 0 : (index === 0 || index === 2) // A,C for multi
        });
      });
    }
  });
  
  return choices;
}

// Generate answers for questions
function generateAnswers(questions) {
  const answers = [];
  
  questions.forEach(question => {
    let correctAnswer;
    
    if (question.type === 'single') {
      correctAnswer = 'A';
    } else if (question.type === 'multi') {
      correctAnswer = 'A,C';
    } else if (question.type === 'numeric') {
      correctAnswer = (Math.random() * 100).toFixed(2); // Random numeric answer
    }
    
    answers.push({
      question_id: question.id,
      correct_answer: correctAnswer,
      explanation: `Explanation for ${question.type} question ${question.qnum}`
    });
  });
  
  return answers;
}

async function insertSyntheticData() {
  console.log('🚀 Starting synthetic data insertion...\n');
  
  try {
    const results = [];
    
    for (const paperData of papers) {
      console.log(`📝 Creating paper: ${paperData.title}`);
      
      // Insert paper
      const { data: paper, error: paperError } = await supabase
        .from('papers')
        .insert([paperData])
        .select()
        .single();
      
      if (paperError) {
        console.error(`❌ Error creating paper ${paperData.exam}:`, paperError);
        continue;
      }
      
      console.log(`✅ Paper created with ID: ${paper.id}`);
      
      // Generate and insert topics
      const subjects = Object.keys(topicMappings[paperData.exam]);
      const allTopics = [];
      
      subjects.forEach(subject => {
        topicMappings[paperData.exam][subject].forEach(topicName => {
          allTopics.push({
            name: topicName,
            subject,
            exam: paperData.exam
          });
        });
      });
      
      // Insert topics (ignore if they already exist)
      const { data: topics, error: topicsError } = await supabase
        .from('topics')
        .upsert(allTopics, { 
          onConflict: 'name,subject,exam',
          ignoreDuplicates: true 
        })
        .select();
      
      if (topicsError) {
        console.error(`❌ Error creating topics for ${paperData.exam}:`, topicsError);
      } else {
        console.log(`✅ Topics processed: ${allTopics.length} topics`);
      }
      
      // Generate questions
      const questions = generateQuestions(paperData.exam, paper.id);
      
      // Insert questions
      const { data: insertedQuestions, error: questionsError } = await supabase
        .from('questions')
        .insert(questions)
        .select();
      
      if (questionsError) {
        console.error(`❌ Error creating questions for ${paperData.exam}:`, questionsError);
        continue;
      }
      
      console.log(`✅ Questions created: ${insertedQuestions.length} questions`);
      
      // Generate and insert choices
      const choices = generateChoices(insertedQuestions);
      
      if (choices.length > 0) {
        const { error: choicesError } = await supabase
          .from('choices')
          .insert(choices);
        
        if (choicesError) {
          console.error(`❌ Error creating choices for ${paperData.exam}:`, choicesError);
        } else {
          console.log(`✅ Choices created: ${choices.length} choices`);
        }
      }
      
      // Generate and insert answers
      const answers = generateAnswers(insertedQuestions);
      
      const { error: answersError } = await supabase
        .from('answers')
        .insert(answers);
      
      if (answersError) {
        console.error(`❌ Error creating answers for ${paperData.exam}:`, answersError);
      } else {
        console.log(`✅ Answers created: ${answers.length} answers`);
      }
      
      results.push({
        exam: paperData.exam,
        paperId: paper.id,
        questionCount: insertedQuestions.length
      });
      
      console.log(`✅ Completed ${paperData.exam}\n`);
    }
    
    // Summary
    console.log('🎉 Synthetic data insertion completed!\n');
    console.log('📊 Summary:');
    results.forEach(result => {
      console.log(`   ${result.exam}: Paper ID ${result.paperId}, ${result.questionCount} questions`);
    });
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the script
insertSyntheticData();
