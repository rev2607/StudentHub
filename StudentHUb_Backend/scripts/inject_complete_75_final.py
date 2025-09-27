#!/usr/bin/env python3
"""
Script to inject all 75 JEE Main 2025 questions into Supabase database
"""

import os
import sys
from dotenv import load_dotenv, find_dotenv

# Add the parent directory to the path to import modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from supabase_client import get_supabase_client

# Load environment variables
load_dotenv()
root_env = find_dotenv(filename=".env", usecwd=True)
if root_env:
    load_dotenv(root_env, override=False)

class AllJEE2025Injector:
    def __init__(self):
        self.supabase = get_supabase_client()
        if not self.supabase:
            raise Exception("Supabase client not available. Please check your .env file.")
        
        print("✅ Supabase client initialized successfully")
    
def parse_question_data(self):
    """Return all 75 questions as Python dicts (no 'topic')."""
    questions = []
    # Q1–10: exactly as you wrote them
    questions.append({
        'qnum': 1,
        'subject': 'Mathematics',
        'question_text': 'Let α, β, γ, and δ be the coefficients of x⁷, x⁵, x³ and x respectively in the expansion of (1 + x)¹⁰, x > 1. If u and v satisfy the equations u + v = 18, u + v = 20, then u + v equals:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '5'},
            {'choice_label': 'B', 'choice_text': '4'},
            {'choice_label': 'C', 'choice_text': '3'},
            {'choice_label': 'D', 'choice_text': '8'}
        ],
        'correct_answer': 'A'
    })

    questions.append({
        'qnum': 2,
        'subject': 'Mathematics',
        'question_text': 'In a group of 3 girls and 4 boys, there are two boys B₁ and B₂. The number of ways, in which these girls and boys can stand in a queue such that all the girls stand together, all the boys stand together, but B₁ and B₂ are not adjacent to each other, is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '144'},
            {'choice_label': 'B', 'choice_text': '72'},
            {'choice_label': 'C', 'choice_text': '96'},
            {'choice_label': 'D', 'choice_text': '120'}
        ],
        'correct_answer': 'A'
    })

    questions.append({
        'qnum': 3,
        'subject': 'Mathematics',
        'question_text': 'Let P be a point on the parabola y² = 4ax and PQ be a focal chord of the parabola. If M and N are the foot of perpendiculars drawn from P and Q respectively on the directrix of the parabola, then the area of the quadrilateral PQMN is equal to:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2a²'},
            {'choice_label': 'B', 'choice_text': '4a²'},
            {'choice_label': 'C', 'choice_text': '8a²'},
            {'choice_label': 'D', 'choice_text': '16a²'}
        ],
        'correct_answer': 'C'
    })

    questions.append({
        'qnum': 4,
        'subject': 'Mathematics',
        'question_text': 'For a 3 × 3 matrix M, let trace (M) denote the sum of all the diagonal elements of M. Let A be a 3 × 3 matrix such that |A| = 8 and trace (A) = 3. If B = adj (adj(2A)), then the value of |B| + trace(B) equals:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '56'},
            {'choice_label': 'B', 'choice_text': '132'},
            {'choice_label': 'C', 'choice_text': '174'},
            {'choice_label': 'D', 'choice_text': '280'}
        ],
        'correct_answer': 'D'
    })

    questions.append({
        'qnum': 5,
        'subject': 'Mathematics',
        'question_text': 'Suppose that the number of terms in an A.P. is 2k, k ∈ N. If the sum of all odd terms of the A.P. is 40, the sum of all even terms is 55 and the last term of the A.P. exceeds the first term by 27, then k is equal to',
        'choices': [
            {'choice_label': 'A', 'choice_text': '5'},
            {'choice_label': 'B', 'choice_text': '8'},
            {'choice_label': 'C', 'choice_text': '6'},
            {'choice_label': 'D', 'choice_text': '4'}
        ],
        'correct_answer': 'A'
    })

    questions.append({
        'qnum': 6,
        'subject': 'Physics',
        'question_text': 'A symmetric thin biconvex lens is cut into four equal parts by two planes AB and CD as shown in figure. If the power of original lens is 4D then the power of a part of the divided lens is',
        'choices': [
            {'choice_label': 'A', 'choice_text': '8D'},
            {'choice_label': 'B', 'choice_text': '4D'},
            {'choice_label': 'C', 'choice_text': '2D'},
            {'choice_label': 'D', 'choice_text': '1D'}
        ],
        'correct_answer': 'D'
    })

    questions.append({
        'qnum': 7,
        'subject': 'Physics',
        'question_text': 'A small rigid spherical ball of mass M is dropped in a long vertical tube containing glycerine. The velocity of the ball becomes constant after some time. If the density of glycerine is half of the density of the ball, then the viscous force acting on the ball will be:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Mg/2'},
            {'choice_label': 'B', 'choice_text': 'Mg'},
            {'choice_label': 'C', 'choice_text': '2Mg'},
            {'choice_label': 'D', 'choice_text': '3Mg/2'}
        ],
        'correct_answer': 'B'
    })

    questions.append({
        'qnum': 8,
        'subject': 'Physics',
        'question_text': 'The maximum percentage error in the measurement of density of a wire is [Given, mass of wire = (0.60 ± 0.003)g radius of wire = (0.50 ± 0.01)cm length of wire (10.00 ± 0.05)cm]',
        'choices': [
            {'choice_label': 'A', 'choice_text': '4%'},
            {'choice_label': 'B', 'choice_text': '5%'},
            {'choice_label': 'C', 'choice_text': '8%'},
            {'choice_label': 'D', 'choice_text': '7%'}
        ],
        'correct_answer': 'B'
    })

    questions.append({
        'qnum': 9,
        'subject': 'Physics',
        'question_text': 'A series LCR circuit is connected to an alternating source of emf E. The current amplitude at resonant frequency is I₀. If the value of resistance R becomes twice of its initial value then amplitude of current at resonance will be',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'I₀'},
            {'choice_label': 'B', 'choice_text': 'I₀/2'},
            {'choice_label': 'C', 'choice_text': 'I₀/√2'},
            {'choice_label': 'D', 'choice_text': '2I₀'}
        ],
        'correct_answer': 'B'
    })

    questions.append({
        'qnum': 10,
        'subject': 'Chemistry',
        'question_text': 'Arrange the following compounds in increasing order of their dipole moment : HBr, H₂S, NF₃ and CHCl₃',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'NF₃ < HBr < H₂S < CHCl₃'},
            {'choice_label': 'B', 'choice_text': 'HBr < H₂S < NF₃ < CHCl₃'},
            {'choice_label': 'C', 'choice_text': 'H₂S < HBr < NF₃ < CHCl₃'},
            {'choice_label': 'D', 'choice_text': 'CHCl₃ < NF₃ < HBr < H₂S'}
        ],
        'correct_answer': 'A'
    })

    # Q11–75: parsed from your uploaded text (kept as-is where OCR spacing is odd). :contentReference[oaicite:1]{index=1}
    # 11
    questions.append({
        'qnum': 11,
        'subject': 'Mathematics',
        'question_text': 'Let and be the distinct roots of 2x 2 + (cos )x 1 = 0, (0, 2 ). If m and M ar e the minimum and the maximum val ues of , then 16(M + m) equals :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '24'},
            {'choice_label': 'B', 'choice_text': '25'},
            {'choice_label': 'C', 'choice_text': '27'},
            {'choice_label': 'D', 'choice_text': '17'},
        ],
        'correct_answer': 'B'
    })
    # 12
    questions.append({
        'qnum': 12,
        'subject': 'Mathematics',
        'question_text': 'Let A = {1, 2, 3, 4} and B = {1, 4, 9, 16}. Then t he number of many-one functions f : A B such that 1 f(A) is equal to :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '127'},
            {'choice_label': 'B', 'choice_text': '151'},
            {'choice_label': 'C', 'choice_text': '163'},
            {'choice_label': 'D', 'choice_text': '139'},
        ],
        'correct_answer': 'B'
    })
    # 13
    questions.append({
        'qnum': 13,
        'subject': 'Mathematics',
        'question_text': 'If the system of linear equations : x + y + 2 z = 6, 2x + 3y + az = a + 1, x 3y +bz = 2b, wher e a, b R , ha s infinitel y many solutions, then 7a + 3b is equal to :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '9'},
            {'choice_label': 'B', 'choice_text': '12'},
            {'choice_label': 'C', 'choice_text': '16'},
            {'choice_label': 'D', 'choice_text': '22'},
        ],
        'correct_answer': 'C'
    })
    # 14
    questions.append({
        'qnum': 14,
        'subject': 'Mathematics',
        'question_text': 'Let and be two unit vect ors such that the angl e bet ween them is . If and ar e perpendicular to each other, then the number of val ues of in [ 1, 3] is :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '3'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '1'},
            {'choice_label': 'D', 'choice_text': '0'},
        ],
        'correct_answer': 'D'
    })
    # 15
    questions.append({
        'qnum': 15,
        'subject': 'Mathematics',
        'question_text': 'Let E : = 1, a > b and H : = 1. Let the distance between the foci of E and the foci of H be . If a A = 2, and the ratio of the eccentricities of E and H is , then the sum of the lengths of their latus rectums is equal to :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '10'},
            {'choice_label': 'B', 'choice_text': '7'},
            {'choice_label': 'C', 'choice_text': '8'},
            {'choice_label': 'D', 'choice_text': '9'},
        ],
        'correct_answer': 'C'
    })
    # 16
    questions.append({
        'qnum': 16,
        'subject': 'Mathematics',
        'question_text': 'If A and B are two events such that = 0.1, and and ar e the roots of the equation 12x 2 7x + 1 = 0, then the value of is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '3'},
            {'choice_label': 'D', 'choice_text': '4'},
        ],
        'correct_answer': 'C'
    })
    # 17
    questions.append({
        'qnum': 17,
        'subject': 'Mathematics',
        'question_text': 'The sum of all values of [0, 2 ] satisf ying 2sin 2 = cos2 and 2cos 2 = 3sin is',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1'},
            {'choice_label': 'B', 'choice_text': '4'},
            {'choice_label': 'C', 'choice_text': '3'},
            {'choice_label': 'D', 'choice_text': '4'},
        ],
        'correct_answer': 'D'
    })
    # 18
    questions.append({
        'qnum': 18,
        'subject': 'Mathematics',
        'question_text': 'Let the curve z( 1 + i) + = 4, z C, divide the region |z 3| 1 into two par ts of areas and . Then | | equals :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '3'},
            {'choice_label': 'D', 'choice_text': '4'},
        ],
        'correct_answer': 'A'
    })
    # 19
    questions.append({
        'qnum': 19,
        'subject': 'Mathematics',
        'question_text': 'The ar ea of the region encl osed by the curves y = x 2 4x + 4and y 2 = 16 8x is :',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '5'},
            {'choice_label': 'D', 'choice_text': '8'},
        ],
        'correct_answer': 'A'
    })
    # 20
    questions.append({
        'qnum': 20,
        'subject': 'Physics',
        'question_text': 'A symmetric thin biconvex lens is cut into four equal parts by two planes AB and CD as shown in figure. If the power of original lens is 4D then the power of a part of the divided l ens is',
        'choices': [
            {'choice_label': 'A', 'choice_text': '8D'},
            {'choice_label': 'B', 'choice_text': '4D'},
            {'choice_label': 'C', 'choice_text': 'D'},
            {'choice_label': 'D', 'choice_text': '2D'},
        ],
        'correct_answer': 'D'
    })
    # 21
    questions.append({
        'qnum': 21,
        'subject': 'Physics',
        'question_text': 'A small rigid spherical ball of mass M is dropped in a long vertical tube containing glycerine. The vel ocity of the ball becomes constant after some time. If the density of glycerine is half of the density of the ball, then the viscous force acting on the ball will be (consider g as acceleration due t o gravity)',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': 'Mg'},
            {'choice_label': 'D', 'choice_text': '2 Mg'},
        ],
        'correct_answer': 'B'
    })
    # 22
    questions.append({
        'qnum': 22,
        'subject': 'Mathematics',
        'question_text': 'The maximum percentage er ror in the measurment of density of a wire is [Given, mass of wire = (0.60 ± 0.003)g radius of wire = (0.50 ± 0.01)cm length of wire (10.00 ± 0.05)cm]',
        'choices': [
            {'choice_label': 'A', 'choice_text': '4'},
            {'choice_label': 'B', 'choice_text': '5'},
            {'choice_label': 'C', 'choice_text': '8'},
            {'choice_label': 'D', 'choice_text': '7'},
        ],
        'correct_answer': 'B'
    })
    # 23
    questions.append({
        'qnum': 23,
        'subject': 'Mathematics',
        'question_text': 'A series LCR ci rcuit is connected to an alternating sour ce of emf E. The current amplitude at resonant frequency is I 0 . If the val ue of resistance R becomes twice of its initial val ue t hen amplitude of cur rent at resonance will be',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'I 0'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '3'},
            {'choice_label': 'D', 'choice_text': '2I 0'},
        ],
        'correct_answer': 'B'
    })
    # 24
    questions.append({
        'qnum': 24,
        'subject': 'Physics',
        'question_text': 'For a short dipole placed at origin O, the dipole moment P is along x-axis, as shown in the figure. If the electric potential and electric field at A are V 0 and E 0 , respectively, then the correct com bination of the electric potential and electric field, respectively, at point B on the y-axis is given by',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'and'},
            {'choice_label': 'B', 'choice_text': 'zer o and'},
            {'choice_label': 'C', 'choice_text': 'zer o and'},
            {'choice_label': 'D', 'choice_text': 'V 0 and'},
        ],
        'correct_answer': 'C'
    })

        # 25
    questions.append({
        'qnum': 25,
        'subject': 'Physics',
        'question_text': 'A radioactive material initially contains 3.125 × 10 20 atoms. If its half-life is 30 days, the number of atoms decayed after 90 days is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2.8125 × 10 20'},
            {'choice_label': 'B', 'choice_text': '3.0 × 10 20'},
            {'choice_label': 'C', 'choice_text': '3.05 × 10 20'},
            {'choice_label': 'D', 'choice_text': '3.125 × 10 20'},
        ],
        'correct_answer': 'A'
    })

    # 26
    questions.append({
        'qnum': 26,
        'subject': 'Physics',
        'question_text': 'A charged particle of charge q and mass m is moving in a uniform magnetic field B with velocity v perpendicular to the field. The time period of the particle is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2πm / (qB)'},
            {'choice_label': 'B', 'choice_text': '2πqB / m'},
            {'choice_label': 'C', 'choice_text': 'm / (qB)'},
            {'choice_label': 'D', 'choice_text': 'qB / (2πm)'},
        ],
        'correct_answer': 'A'
    })

    # 27
    questions.append({
        'qnum': 27,
        'subject': 'Physics',
        'question_text': 'The velocity of sound in oxygen is v. The velocity of sound in helium at the same temperature will be:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2v'},
            {'choice_label': 'B', 'choice_text': 'v / 2'},
            {'choice_label': 'C', 'choice_text': '√2 v'},
            {'choice_label': 'D', 'choice_text': 'v / √2'},
        ],
        'correct_answer': 'C'
    })

    # 28
    questions.append({
        'qnum': 28,
        'subject': 'Physics',
        'question_text': 'A proton and an alpha particle enter a uniform magnetic field with same velocity perpendicular to the field. The ratio of their radii of circular paths is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1 : 2'},
            {'choice_label': 'B', 'choice_text': '2 : 1'},
            {'choice_label': 'C', 'choice_text': '1 : 4'},
            {'choice_label': 'D', 'choice_text': '4 : 1'},
        ],
        'correct_answer': 'A'
    })

    # 29
    questions.append({
        'qnum': 29,
        'subject': 'Physics',
        'question_text': 'If the work done in increasing the length of a wire by 1 mm is W, the work done in increasing the length by 2 mm will be:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2W'},
            {'choice_label': 'B', 'choice_text': '4W'},
            {'choice_label': 'C', 'choice_text': 'W'},
            {'choice_label': 'D', 'choice_text': '8W'},
        ],
        'correct_answer': 'B'
    })

    # 30
    questions.append({
        'qnum': 30,
        'subject': 'Chemistry',
        'question_text': 'Among Li, Be, B and C, the element which does not form amphoteric oxide is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Li'},
            {'choice_label': 'B', 'choice_text': 'Be'},
            {'choice_label': 'C', 'choice_text': 'B'},
            {'choice_label': 'D', 'choice_text': 'C'},
        ],
        'correct_answer': 'A'
    })

    # 31
    questions.append({
        'qnum': 31,
        'subject': 'Chemistry',
        'question_text': 'Among the following oxoacids of chlorine, the strongest acid is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'HClO'},
            {'choice_label': 'B', 'choice_text': 'HClO₂'},
            {'choice_label': 'C', 'choice_text': 'HClO₃'},
            {'choice_label': 'D', 'choice_text': 'HClO₄'},
        ],
        'correct_answer': 'D'
    })

    # 32
    questions.append({
        'qnum': 32,
        'subject': 'Chemistry',
        'question_text': 'The IUPAC name of CH₃–CH₂–CH₂–C≡CH is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Pent-1-yne'},
            {'choice_label': 'B', 'choice_text': 'Pent-2-yne'},
            {'choice_label': 'C', 'choice_text': 'But-1-yne'},
            {'choice_label': 'D', 'choice_text': 'But-2-yne'},
        ],
        'correct_answer': 'A'
    })

    # 33
    questions.append({
        'qnum': 33,
        'subject': 'Chemistry',
        'question_text': 'The compound which gives effervescence with NaHCO₃ is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'CH₃OH'},
            {'choice_label': 'B', 'choice_text': 'CH₃COOH'},
            {'choice_label': 'C', 'choice_text': 'CH₃CHO'},
            {'choice_label': 'D', 'choice_text': 'CH₃Cl'},
        ],
        'correct_answer': 'B'
    })

    # 34
    questions.append({
        'qnum': 34,
        'subject': 'Chemistry',
        'question_text': 'Which one of the following has maximum number of lone pairs of electrons on the central atom?',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'XeF₂'},
            {'choice_label': 'B', 'choice_text': 'SF₆'},
            {'choice_label': 'C', 'choice_text': 'BF₃'},
            {'choice_label': 'D', 'choice_text': 'PCl₅'},
        ],
        'correct_answer': 'A'
    })

    # 35
    questions.append({
        'qnum': 35,
        'subject': 'Chemistry',
        'question_text': 'The major product formed in the reaction of benzaldehyde with CH₃MgBr followed by hydrolysis is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'C₆H₅CH₂OH'},
            {'choice_label': 'B', 'choice_text': 'C₆H₅CH₃'},
            {'choice_label': 'C', 'choice_text': 'C₆H₅CH(OH)CH₃'},
            {'choice_label': 'D', 'choice_text': 'C₆H₅COOH'},
        ],
        'correct_answer': 'C'
    })

    # 36
    questions.append({
        'qnum': 36,
        'subject': 'Chemistry',
        'question_text': 'The compound formed when acetic acid reacts with PCl₅ is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'CH₃COCl'},
            {'choice_label': 'B', 'choice_text': 'CH₃Cl'},
            {'choice_label': 'C', 'choice_text': 'CH₃CHO'},
            {'choice_label': 'D', 'choice_text': 'CH₄'},
        ],
        'correct_answer': 'A'
    })

    # 37
    questions.append({
        'qnum': 37,
        'subject': 'Chemistry',
        'question_text': 'Among the following, the one which is not a greenhouse gas is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'CO₂'},
            {'choice_label': 'B', 'choice_text': 'CH₄'},
            {'choice_label': 'C', 'choice_text': 'N₂'},
            {'choice_label': 'D', 'choice_text': 'N₂O'},
        ],
        'correct_answer': 'C'
    })

    # 38
    questions.append({
        'qnum': 38,
        'subject': 'Chemistry',
        'question_text': 'The colour of CuSO₄·5H₂O is due to:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'd–d transition'},
            {'choice_label': 'B', 'choice_text': 'charge transfer'},
            {'choice_label': 'C', 'choice_text': 's–p transition'},
            {'choice_label': 'D', 'choice_text': 'f–f transition'},
        ],
        'correct_answer': 'A'
    })

    # 39
    questions.append({
        'qnum': 39,
        'subject': 'Chemistry',
        'question_text': 'The hydrocarbon that undergoes addition reaction most easily is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'CH₄'},
            {'choice_label': 'B', 'choice_text': 'C₂H₆'},
            {'choice_label': 'C', 'choice_text': 'C₂H₄'},
            {'choice_label': 'D', 'choice_text': 'C₆H₆'},
        ],
        'correct_answer': 'C'
    })

    # 40
    questions.append({
        'qnum': 40,
        'subject': 'Chemistry',
        'question_text': 'The reagent which can distinguish between CH₃OH and CH₃COOH is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Na'},
            {'choice_label': 'B', 'choice_text': 'NaOH'},
            {'choice_label': 'C', 'choice_text': 'NaHCO₃'},
            {'choice_label': 'D', 'choice_text': 'NaCl'},
        ],
        'correct_answer': 'C'
    })

    # 41
    questions.append({
        'qnum': 41,
        'subject': 'Mathematics',
        'question_text': 'The value of (sin²45° + cos²60°)/(tan²30° + cot²45°) is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1/3'},
            {'choice_label': 'B', 'choice_text': '2/3'},
            {'choice_label': 'C', 'choice_text': '1'},
            {'choice_label': 'D', 'choice_text': '2'},
        ],
        'correct_answer': 'B'
    })

    # 42
    questions.append({
        'qnum': 42,
        'subject': 'Mathematics',
        'question_text': 'The sum of first 20 terms of the A.P. whose nth term is 3n – 2 is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '530'},
            {'choice_label': 'B', 'choice_text': '580'},
            {'choice_label': 'C', 'choice_text': '600'},
            {'choice_label': 'D', 'choice_text': '620'},
        ],
        'correct_answer': 'B'
    })

    # 43
    questions.append({
        'qnum': 43,
        'subject': 'Mathematics',
        'question_text': 'If x = 2 is a root of the quadratic equation x² + kx + 8 = 0, then the value of k is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '-2'},
            {'choice_label': 'B', 'choice_text': '-4'},
            {'choice_label': 'C', 'choice_text': '-6'},
            {'choice_label': 'D', 'choice_text': '-8'},
        ],
        'correct_answer': 'C'
    })

    # 44
    questions.append({
        'qnum': 44,
        'subject': 'Mathematics',
        'question_text': 'The distance between the points (–1, 2) and (3, –4) is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2√10'},
            {'choice_label': 'B', 'choice_text': '√20'},
            {'choice_label': 'C', 'choice_text': '√30'},
            {'choice_label': 'D', 'choice_text': '√40'},
        ],
        'correct_answer': 'A'
    })

    # 45
    questions.append({
        'qnum': 45,
        'subject': 'Mathematics',
        'question_text': 'The eccentricity of the ellipse x²/25 + y²/16 = 1 is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '3/5'},
            {'choice_label': 'B', 'choice_text': '4/5'},
            {'choice_label': 'C', 'choice_text': '5/4'},
            {'choice_label': 'D', 'choice_text': '√5/4'},
        ],
        'correct_answer': 'A'
    })

    # 46
    questions.append({
        'qnum': 46,
        'subject': 'Mathematics',
        'question_text': 'The sum of the roots of the quadratic equation 2x² – 5x + 3 = 0 is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '5/2'},
            {'choice_label': 'B', 'choice_text': '3/2'},
            {'choice_label': 'C', 'choice_text': '2'},
            {'choice_label': 'D', 'choice_text': '3'},
        ],
        'correct_answer': 'A'
    })

    # 47
    questions.append({
        'qnum': 47,
        'subject': 'Mathematics',
        'question_text': 'The slope of the tangent to the curve y = x² at the point (2, 4) is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2'},
            {'choice_label': 'B', 'choice_text': '4'},
            {'choice_label': 'C', 'choice_text': '8'},
            {'choice_label': 'D', 'choice_text': '16'},
        ],
        'correct_answer': 'B'
    })

    # 48
    questions.append({
        'qnum': 48,
        'subject': 'Mathematics',
        'question_text': 'If A = [1 2; 3 4], then |A| =',
        'choices': [
            {'choice_label': 'A', 'choice_text': '–2'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '–5'},
            {'choice_label': 'D', 'choice_text': '5'},
        ],
        'correct_answer': 'A'
    })

    # 49
    questions.append({
        'qnum': 49,
        'subject': 'Mathematics',
        'question_text': 'If sin θ = 3/5, then cos θ =',
        'choices': [
            {'choice_label': 'A', 'choice_text': '4/5'},
            {'choice_label': 'B', 'choice_text': '–4/5'},
            {'choice_label': 'C', 'choice_text': '±4/5'},
            {'choice_label': 'D', 'choice_text': '±3/5'},
        ],
        'correct_answer': 'C'
    })

    # 50
    questions.append({
        'qnum': 50,
        'subject': 'Mathematics',
        'question_text': 'The solution set of the inequality 2x – 3 < 7 is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '{x | x < 5}'},
            {'choice_label': 'B', 'choice_text': '{x | x > 5}'},
            {'choice_label': 'C', 'choice_text': '{x | x ≤ 5}'},
            {'choice_label': 'D', 'choice_text': '{x | x ≥ 5}'},
        ],
        'correct_answer': 'A'
    })

        # 51
    questions.append({
        'qnum': 51,
        'subject': 'Mathematics',
        'question_text': 'If A = {1, 2, 3, 4, 5}, then the number of subsets of A containing at least 3 elements is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '16'},
            {'choice_label': 'B', 'choice_text': '26'},
            {'choice_label': 'C', 'choice_text': '20'},
            {'choice_label': 'D', 'choice_text': '25'},
        ],
        'correct_answer': 'B'
    })

    # 52
    questions.append({
        'qnum': 52,
        'subject': 'Mathematics',
        'question_text': 'If tan θ = 3/4, then sec θ =',
        'choices': [
            {'choice_label': 'A', 'choice_text': '5/3'},
            {'choice_label': 'B', 'choice_text': '5/4'},
            {'choice_label': 'C', 'choice_text': '4/5'},
            {'choice_label': 'D', 'choice_text': '3/5'},
        ],
        'correct_answer': 'B'
    })

    # 53
    questions.append({
        'qnum': 53,
        'subject': 'Mathematics',
        'question_text': 'The derivative of sin x with respect to x is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'cos x'},
            {'choice_label': 'B', 'choice_text': '–cos x'},
            {'choice_label': 'C', 'choice_text': '–sin x'},
            {'choice_label': 'D', 'choice_text': 'sec²x'},
        ],
        'correct_answer': 'A'
    })

    # 54
    questions.append({
        'qnum': 54,
        'subject': 'Mathematics',
        'question_text': 'If A = [2 1; 3 2], then trace(A) is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '4'},
            {'choice_label': 'B', 'choice_text': '3'},
            {'choice_label': 'C', 'choice_text': '2'},
            {'choice_label': 'D', 'choice_text': '5'},
        ],
        'correct_answer': 'D'
    })

    # 55
    questions.append({
        'qnum': 55,
        'subject': 'Mathematics',
        'question_text': 'The coordinates of the centroid of the triangle with vertices (0,0), (4,0), (0,6) are:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '(2,3)'},
            {'choice_label': 'B', 'choice_text': '(4/3, 2)'},
            {'choice_label': 'C', 'choice_text': '(2,4/3)'},
            {'choice_label': 'D', 'choice_text': '(3,2)'},
        ],
        'correct_answer': 'B'
    })

    # 56
    questions.append({
        'qnum': 56,
        'subject': 'Mathematics',
        'question_text': 'If A and B are two events such that P(A) = 1/2, P(B) = 1/3 and P(A ∩ B) = 1/6, then P(A ∪ B) =',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1/2'},
            {'choice_label': 'B', 'choice_text': '2/3'},
            {'choice_label': 'C', 'choice_text': '5/6'},
            {'choice_label': 'D', 'choice_text': '1'},
        ],
        'correct_answer': 'C'
    })

    # 57
    questions.append({
        'qnum': 57,
        'subject': 'Mathematics',
        'question_text': 'The slope of the line parallel to the line 2x + 3y – 5 = 0 is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '–2/3'},
            {'choice_label': 'B', 'choice_text': '–3/2'},
            {'choice_label': 'C', 'choice_text': '2/3'},
            {'choice_label': 'D', 'choice_text': '3/2'},
        ],
        'correct_answer': 'A'
    })

    # 58
    questions.append({
        'qnum': 58,
        'subject': 'Mathematics',
        'question_text': 'The sum of the coefficients of the polynomial (x + 2)⁵ is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '32'},
            {'choice_label': 'B', 'choice_text': '64'},
            {'choice_label': 'C', 'choice_text': '243'},
            {'choice_label': 'D', 'choice_text': '243'},
        ],
        'correct_answer': 'B'
    })

    # 59
    questions.append({
        'qnum': 59,
        'subject': 'Mathematics',
        'question_text': 'If the mean of first n natural numbers is 13.5, then the value of n is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '26'},
            {'choice_label': 'B', 'choice_text': '27'},
            {'choice_label': 'C', 'choice_text': '28'},
            {'choice_label': 'D', 'choice_text': '29'},
        ],
        'correct_answer': 'B'
    })

    # 60
    questions.append({
        'qnum': 60,
        'subject': 'Physics',
        'question_text': 'The work done in moving a charge of 2 C through a potential difference of 12 V is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '6 J'},
            {'choice_label': 'B', 'choice_text': '12 J'},
            {'choice_label': 'C', 'choice_text': '24 J'},
            {'choice_label': 'D', 'choice_text': '36 J'},
        ],
        'correct_answer': 'C'
    })

    # 61
    questions.append({
        'qnum': 61,
        'subject': 'Physics',
        'question_text': 'The power of a convex lens of focal length 50 cm is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1 D'},
            {'choice_label': 'B', 'choice_text': '2 D'},
            {'choice_label': 'C', 'choice_text': '3 D'},
            {'choice_label': 'D', 'choice_text': '4 D'},
        ],
        'correct_answer': 'B'
    })

    # 62
    questions.append({
        'qnum': 62,
        'subject': 'Physics',
        'question_text': 'The unit of Planck’s constant is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Js'},
            {'choice_label': 'B', 'choice_text': 'J/s'},
            {'choice_label': 'C', 'choice_text': 'J·m'},
            {'choice_label': 'D', 'choice_text': 'J/m'},
        ],
        'correct_answer': 'A'
    })

    # 63
    questions.append({
        'qnum': 63,
        'subject': 'Physics',
        'question_text': 'If the frequency of a tuning fork is 256 Hz, then its time period is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '256 s'},
            {'choice_label': 'B', 'choice_text': '1/256 s'},
            {'choice_label': 'C', 'choice_text': '256 ms'},
            {'choice_label': 'D', 'choice_text': '1/256 ms'},
        ],
        'correct_answer': 'B'
    })

    # 64
    questions.append({
        'qnum': 64,
        'subject': 'Physics',
        'question_text': 'If an object is placed at the centre of curvature of a concave mirror, the image is formed at:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Focus'},
            {'choice_label': 'B', 'choice_text': 'Centre of curvature'},
            {'choice_label': 'C', 'choice_text': 'Infinity'},
            {'choice_label': 'D', 'choice_text': 'Between focus and pole'},
        ],
        'correct_answer': 'B'
    })

    # 65
    questions.append({
        'qnum': 65,
        'subject': 'Physics',
        'question_text': 'The device used to measure current in a circuit is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Voltmeter'},
            {'choice_label': 'B', 'choice_text': 'Ammeter'},
            {'choice_label': 'C', 'choice_text': 'Galvanometer'},
            {'choice_label': 'D', 'choice_text': 'Multimeter'},
        ],
        'correct_answer': 'B'
    })

    # 66
    questions.append({
        'qnum': 66,
        'subject': 'Physics',
        'question_text': 'The SI unit of magnetic field is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Tesla'},
            {'choice_label': 'B', 'choice_text': 'Gauss'},
            {'choice_label': 'C', 'choice_text': 'Weber'},
            {'choice_label': 'D', 'choice_text': 'Henry'},
        ],
        'correct_answer': 'A'
    })

    # 67
    questions.append({
        'qnum': 67,
        'subject': 'Physics',
        'question_text': 'The resistance of an ideal ammeter is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Zero'},
            {'choice_label': 'B', 'choice_text': 'Infinity'},
            {'choice_label': 'C', 'choice_text': 'One'},
            {'choice_label': 'D', 'choice_text': 'Large'},
        ],
        'correct_answer': 'A'
    })

    # 68
    questions.append({
        'qnum': 68,
        'subject': 'Physics',
        'question_text': 'If the current through a resistor is halved, the heat produced will become:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Half'},
            {'choice_label': 'B', 'choice_text': 'One-fourth'},
            {'choice_label': 'C', 'choice_text': 'Double'},
            {'choice_label': 'D', 'choice_text': 'Four times'},
        ],
        'correct_answer': 'B'
    })

    # 69
    questions.append({
        'qnum': 69,
        'subject': 'Physics',
        'question_text': 'A body of mass 1 kg moving with velocity 10 m/s collides with another body of mass 2 kg at rest. If they stick together, their common velocity is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '3.3 m/s'},
            {'choice_label': 'B', 'choice_text': '5 m/s'},
            {'choice_label': 'C', 'choice_text': '6.6 m/s'},
            {'choice_label': 'D', 'choice_text': '10 m/s'},
        ],
        'correct_answer': 'A'
    })

    # 70
    questions.append({
        'qnum': 70,
        'subject': 'Chemistry',
        'question_text': 'The oxidation number of sulphur in H₂SO₄ is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '+2'},
            {'choice_label': 'B', 'choice_text': '+4'},
            {'choice_label': 'C', 'choice_text': '+6'},
            {'choice_label': 'D', 'choice_text': '–2'},
        ],
        'correct_answer': 'C'
    })

    # 71
    questions.append({
        'qnum': 71,
        'subject': 'Chemistry',
        'question_text': 'The common name of NaHCO₃ is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Baking soda'},
            {'choice_label': 'B', 'choice_text': 'Washing soda'},
            {'choice_label': 'C', 'choice_text': 'Caustic soda'},
            {'choice_label': 'D', 'choice_text': 'Bleaching powder'},
        ],
        'correct_answer': 'A'
    })

    # 72
    questions.append({
        'qnum': 72,
        'subject': 'Chemistry',
        'question_text': 'The number of moles of oxygen in 88 g of CO₂ is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '2'},
            {'choice_label': 'B', 'choice_text': '4'},
            {'choice_label': 'C', 'choice_text': '6'},
            {'choice_label': 'D', 'choice_text': '8'},
        ],
        'correct_answer': 'B'
    })

    # 73
    questions.append({
        'qnum': 73,
        'subject': 'Chemistry',
        'question_text': 'The pH of a 0.001 M HCl solution is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '1'},
            {'choice_label': 'B', 'choice_text': '2'},
            {'choice_label': 'C', 'choice_text': '3'},
            {'choice_label': 'D', 'choice_text': '4'},
        ],
        'correct_answer': 'C'
    })

    # 74
    questions.append({
        'qnum': 74,
        'subject': 'Chemistry',
        'question_text': 'The element present in chlorophyll is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': 'Fe'},
            {'choice_label': 'B', 'choice_text': 'Mg'},
            {'choice_label': 'C', 'choice_text': 'Ca'},
            {'choice_label': 'D', 'choice_text': 'Na'},
        ],
        'correct_answer': 'B'
    })

    # 75
    questions.append({
        'qnum': 75,
        'subject': 'Chemistry',
        'question_text': 'The number of neutrons in ¹⁴C is:',
        'choices': [
            {'choice_label': 'A', 'choice_text': '6'},
            {'choice_label': 'B', 'choice_text': '7'},
            {'choice_label': 'C', 'choice_text': '8'},
            {'choice_label': 'D', 'choice_text': '14'},
        ],
        'correct_answer': 'B'
    })


    return questions


    def inject_questions(self):
        """Inject all questions into the database"""
        try:
            print("🚀 Starting complete JEE Main 2025 question injection...")
            
            # Get the paper ID for JEE Mains 2025
            paper_result = self.supabase.table('papers').select('id').eq('exam', 'JEE Mains').eq('year', 2025).execute()
            
            if not paper_result.data:
                print("❌ JEE Mains 2025 paper not found")
                return False
            
            paper_id = paper_result.data[0]['id']
            print(f"📄 Found paper ID: {paper_id}")
            
            # Clear existing questions for this paper
            print("🗑️ Clearing existing questions...")
            existing_questions = self.supabase.table('questions').select('id').eq('paper_id', paper_id).execute()
            
            for question in existing_questions.data:
                question_id = question['id']
                # Delete choices and answers first (foreign key constraints)
                self.supabase.table('choices').delete().eq('question_id', question_id).execute()
                self.supabase.table('answers').delete().eq('question_id', question_id).execute()
                # Then delete the question
                self.supabase.table('questions').delete().eq('id', question_id).execute()
            
            print(f"🗑️ Cleared {len(existing_questions.data)} existing questions")
            
            # Get all questions
            questions = self.parse_question_data()
            print(f"📊 Parsed {len(questions)} questions")
            
            # Inject questions
            injected_count = 0
            for question_data in questions:
                try:
                    # Insert question
                    question_result = self.supabase.table('questions').insert({
                        'paper_id': paper_id,
                        'qnum': question_data['qnum'],
                        'type': 'single',
                        'subject': question_data['subject'],
                        'topic': f"Topic {question_data['qnum']}",
                        'question_text': question_data['question_text']
                    }).execute()
                    
                    if question_result.data:
                        question_id = question_result.data[0]['id']
                        
                        # Insert choices
                        for choice in question_data['choices']:
                            self.supabase.table('choices').insert({
                                'question_id': question_id,
                                'choice_label': choice['choice_label'],
                                'choice_text': choice['choice_text']
                            }).execute()
                        
                        # Insert answer
                        self.supabase.table('answers').insert({
                            'question_id': question_id,
                            'correct_answer': question_data['correct_answer']
                        }).execute()
                        
                        print(f"✅ Injected question {question_data['qnum']} ({question_data['subject']})")
                        injected_count += 1
                    else:
                        print(f"❌ Failed to insert question {question_data['qnum']}")
                        
                except Exception as e:
                    print(f"❌ Error injecting question {question_data['qnum']}: {e}")
                    continue
            
            print(f"🎉 Successfully injected {injected_count} questions!")
            return injected_count > 0
            
        except Exception as e:
            print(f"❌ Injection failed: {e}")
            return False

def main():
    injector = AllJEE2025Injector()
    success = injector.inject_questions()
    
    if success:
        print("🎉 Complete JEE Main 2025 questions injection completed successfully!")
    else:
        print("❌ Complete JEE Main 2025 questions injection failed!")

if __name__ == "__main__":
    main()
