"""
Script to insert the first article (JEE Main 2026 Preparation Guide) into the database.
Run this script after setting up the articles table in Supabase.
"""
import os
import sys
from dotenv import load_dotenv

# Add parent directory to path to import modules
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from supabase_client import get_supabase_client

# Load environment variables
load_dotenv()

JEE_ARTICLE = """# JEE Main 2026 Preparation Guide: Smart Strategies for Top Ranks  
### Practical Tips, Study Techniques, and Mindset Hacks to Ace the Exam  

***

### Introduction  

The Joint Entrance Examination (JEE) Main is one of the most competitive exams in India, serving as a gateway to NITs, IIITs, and as a qualifier for JEE Advanced. With lakhs of students appearing each year, cracking it requires more than just hard work—it demands strategy, consistency, and clarity.  

JEE Main 2026 is expected to follow the familiar pattern: questions based on NCERT topics in Physics, Chemistry, and Mathematics. However, competition and cutoffs continue to rise annually. To succeed, aspirants must focus on conceptual understanding, time management, and efficient revision schedules.  

*(Image suggestion: Illustration showing a student at a desk with books titled Physics, Chemistry, Mathematics, and a calendar marked "JEE Main 2026.")*  

***

### Understanding the JEE Main Exam  

#### Exam Structure  

JEE Main consists of two papers. Paper 1 caters to B.E./B.Tech aspirants, while Paper 2 targets B.Arch and B.Planning candidates. For engineering aspirants, Paper 1 includes:  
- Physics  
- Chemistry  
- Mathematics  

Each subject carries 100 marks, and the paper totals 300 marks.  

#### Question Pattern  

- 20 Multiple Choice Questions + 10 Numerical Answer Type questions per subject.  
- Only 5 out of 10 numerical questions are compulsory.  
- 4 marks are awarded for a correct answer, and 1 mark is deducted for a wrong one.  

Understanding this structure helps in tailoring practice sessions to balance accuracy and speed.  

*(Image suggestion: Simple infographic showing JEE Main exam pattern with marks distribution.)*  

***

### Building a Strong Study Foundation  

#### Start with NCERT  

NCERT textbooks remain the cornerstone for JEE Main. They establish the conceptual ground that advanced material builds upon. Before jumping into coaching modules or reference books, ensure complete clarity of NCERT concepts, examples, and end-of-chapter questions.  

#### Strengthen Core Concepts  

Physics demands conceptual clarity and application; Chemistry requires precise memory and understanding; Mathematics emphasizes logic and practice. Treat each subject differently:  
- Visualize theories in Physics through experiments or simulations.  
- Focus on reaction mechanisms and periodic trends in Chemistry.  
- Practice problem-solving drills daily in Mathematics.  

*(Image suggestion: Three students representing Physics, Chemistry, and Mathematics solving problems together on a whiteboard.)*  

***

### Subject-Wise Preparation Strategy  

#### Physics  

Physics in JEE Main mixes numerical application and conceptual reasoning.  

- **Mechanics and Modern Physics** carry heavy weightage.  
- Focus on chapters like Laws of Motion, Work-Energy-Power, Rotational Motion, and Electrodynamics.  
- Practice formula derivations rather than rote memorization.  
- Use formula sheets and flashcards to revise daily.  

**Recommended Approach:**  
After completing each topic, attempt previous year questions (PYQs) to familiarize yourself with the question phrasing and difficulty level.  

*(Image suggestion: Physics formulas and vector diagrams on a blackboard background.)*  

#### Chemistry  

Chemistry is often called the rank booster due to its predictable patterns.  

- **Physical Chemistry:** Practice numerical questions on mole concept, thermodynamics, and chemical kinetics.  
- **Organic Chemistry:** Revise reaction mechanisms instead of memorizing products. Learn named reactions through logical steps.  
- **Inorganic Chemistry:** Make concise notes for periodic properties, coordination compounds, and chemical bonding.  

**Tip:** Inorganic and Organic Chemistry require short but daily revision. Even 20–30 minutes a day can make a huge difference.  

*(Image suggestion: Periodic table with organic and inorganic icons highlighting reaction flow charts.)*  

#### Mathematics  

Mathematics rewards practice, persistence, and pattern recognition.  

- Master coordinate geometry, calculus, and algebra first—they constitute a major part of the paper.  
- Focus on formula accuracy and shortcut methods.  
- Solve mixed-topic problems regularly to strengthen inter-chapter connectivity.  

**Pro tip:** Create a "Mistake Book" listing errors from practice tests—the most effective self-correction tool.  

*(Image suggestion: Student solving an integration problem on tablet screen, surrounded by math symbols.)*  

***

### Time Management and Study Routine  

#### Create a Realistic Timetable  

Avoid unrealistic 15-hour schedules. Instead, target quality over quantity. A six to eight-hour focused study plan with proper breaks yields better outcomes.  

A typical daily structure might be:  
- Morning (Concept Learning): Focus on understanding new theories.  
- Afternoon (Practice & Application): Solve problem sets and online mock tests.  
- Evening (Revision): Revisit notes, formula lists, and error corrections.  

*(Image suggestion: Planner showing time blocks for study, practice, and breaks.)*  

#### Weekly Planning  

- Reserve at least one day for complete revision or mock-test analysis.  
- Track weekly progress using measurable goals—number of chapters revised, tests attempted, or accuracy improvements achieved.  

***

### Smart Practice Techniques  

#### Prioritize Mock Tests  

Attempt online mock tests in a simulated exam environment. The National Testing Agency (NTA) pattern-based mock tests help evaluate accuracy, speed, and time allocation.  

Post-test analysis is as important as the test itself. Track:  
- Mistake patterns  
- Time spent per question  
- Strength and weak topic zones  

#### Solve Previous Year Papers  

Analyzing the past five years of JEE papers reveals recurring question models. You'll understand which formulas, laws, or theories frequently appear, making your revision more focused.  

#### Use Question Batches  

Divide practice sets into small, goal-specific batches—such as Mechanics numericals or Organic Chemistry reactions—rather than taking random mixed papers. This deepens conceptual understanding per topic.  

*(Image suggestion: Student reviewing test scores and marking weak topics on a tablet screen.)*  

***

### Balancing Board Exams and JEE  

Class 12 board exams overlap heavily with JEE Main syllabus. Align your preparation instead of treating them as separate challenges:  
- Study board theory portions in parallel with problem-solving sessions.  
- Use school assignments as revision opportunities rather than distractions.  
- Keep detailed formula sheets combining board practicals and JEE topics.  

*(Image suggestion: Split-screen image — on one side, a student writing a board exam; on the other, practicing JEE problems on a laptop.)*  

***

### Mindset and Mental Preparation  

#### Stay Consistent, Not Perfect  

The biggest hurdle is burnout, not difficulty. Maintain steady momentum rather than rushing for perfection. Missing a few targets occasionally is natural; consistency outweighs fluctuations.  

#### Manage Stress  

Meditation, light exercise, or even short evening walks improve focus and memory retention. Avoid late-night cramming before tests; it hampers performance more than it helps.  

*(Image suggestion: Calm student meditating or stretching near study desk.)*  

#### Maintain Motivation  

Keep reminding yourself why you began this journey—your dream institute, your curiosity for technology, or your personal growth. Visual motivation helps sustain long-term effort.  

***

### Common Mistakes to Avoid  

- **Skipping basics:** Directly jumping into high-level problems without understanding fundamentals.  
- **Ignoring revision:** Knowledge fades quickly without reinforcement.  
- **Neglecting Chemistry:** Many students obsess over Physics and Math but overlook Chemistry's reliability.  
- **Poor time tracking:** Spending too long on difficult questions during exams affects scores drastically.  
- **Over-reliance on coaching:** Coaching guides, but personal self-study is where mastery happens.  

*(Image suggestion: Red-crossed checklist of common mistakes with "Avoid These Traps" header.)*  

***

### Effective Revision Practices  

#### Formula Sheets and Flashcards  

Compile all formulas, constants, and short tricks on one sheet per subject. Review them daily to strengthen recall. Flashcards or mobile apps can make revision portable and efficient.  

#### 45-15 Technique  

Study intensely for 45 minutes, then take a 15-minute mental break. These charged sessions enhance focus during long preparation hours.  

#### Final 30 Days Strategy  

- Focus only on weak areas already identified through tests.  
- Avoid learning brand-new topics.  
- Revise PYQs and formula charts multiple times.  
- Simulate full-length papers in actual exam timings.  

*(Image suggestion: Countdown calendar displaying "30 Days to JEE Main 2026.")*  

***

### Exam Day Tips  

- Reach the exam center early to avoid panic.  
- Start with your strongest subject to build confidence.  
- Keep track of time every 30 minutes.  
- Mark uncertain questions for review rather than guessing randomly.  
- Maintain composure—JEE is as much about mindset as knowledge.  

*(Image suggestion: Clock, ID card, and admit card on a table – symbolizing exam readiness.)*  

***

### Conclusion  

JEE Main 2026 is not just an exam—it's a journey of discipline, patience, and personal growth. Beyond formula memorization, it measures problem-solving creativity and time efficiency. With the right mix of conceptual clarity, practice consistency, and positive mindset, every aspirant can reach their potential.  

Remember: success isn't about how fast you climb, but how steadily you sustain. Stay curious, stay calm, and trust your preparation. The months ahead can redefine your future—make every day count.  """

def insert_jee_article():
    """Insert the JEE Main 2026 article into the database"""
    supabase = get_supabase_client()
    
    if not supabase:
        print("❌ Supabase client not available. Please check your environment variables.")
        return False
    
    try:
        # Check if article already exists
        existing = supabase.table("articles").select("id").eq("slug", "jee-main-2026-preparation-guide").execute()
        
        if existing.data:
            print("✅ Article already exists in database.")
            return True
        
        # Extract excerpt (first paragraph)
        excerpt = "The Joint Entrance Examination (JEE) Main is one of the most competitive exams in India, serving as a gateway to NITs, IIITs, and as a qualifier for JEE Advanced. With lakhs of students appearing each year, cracking it requires more than just hard work—it demands strategy, consistency, and clarity."
        
        article_data = {
            "title": "JEE Main 2026 Preparation Guide: Smart Strategies for Top Ranks",
            "slug": "jee-main-2026-preparation-guide",
            "content": JEE_ARTICLE,
            "excerpt": excerpt,
            "author": "StudentHub Team",
            "category": "Exam Preparation",
            "tags": ["JEE Main", "JEE 2026", "Exam Preparation", "Study Tips", "Engineering"],
            "is_published": True
        }
        
        result = supabase.table("articles").insert(article_data).execute()
        
        if result.data:
            print("✅ Successfully inserted JEE Main 2026 article into database!")
            print(f"   Article ID: {result.data[0]['id']}")
            print(f"   Slug: {result.data[0]['slug']}")
            return True
        else:
            print("❌ Failed to insert article. No data returned.")
            return False
            
    except Exception as e:
        print(f"❌ Error inserting article: {str(e)}")
        return False

if __name__ == "__main__":
    print("🚀 Inserting JEE Main 2026 Preparation Guide article...")
    success = insert_jee_article()
    if success:
        print("\n✅ Done! You can now view the article at /articles/jee-main-2026-preparation-guide")
    else:
        print("\n❌ Failed to insert article. Please check the error messages above.")
        sys.exit(1)

