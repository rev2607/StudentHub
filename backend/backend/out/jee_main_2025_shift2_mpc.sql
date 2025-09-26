-- Generated SQL for JEE Main 2025 Jan 22 Shift 2 — MPC
begin;
set local role to none;
with ins as (
    insert into public.papers (id, exam, year, title, status)
    values (gen_random_uuid(), 'JEE Mains', 2025, 'JEE Main 2025 Jan 22 Shift 2 — MPC', 'published')
    returning id
  ) select 1;
-- Use the most recent paper with same title to resolve id
-- If you need strict idempotency, delete conflicting paper first.
-- Q1 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Let , , and be the coefficients of x 7 , x 5 , x 3 and x respectively in the expansion of , x > 1. If u and v satisfy the equations u + v = 18, u + v = 20, then u + v equals :',
      4, -1, 1
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '5', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '4', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '8', false);
-- Q2 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'In a group of 3 girls and 4 boys, there are two boys B 1 and B 2 . The number of ways, in which these girls and boys can stand i n a queue such t hat all the girls stand together , all the boys stand toget her , but B 1 and B 2 are not adjacent to each other , is :',
      4, -1, 2
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '144', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '72', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '96', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '120', false);
-- Q3 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'For a 3 × 3 matrix M, let trace (M) denote the sum of all the diagonal el ements of M. Let A be a 3 × 3 matrix such that |A| = and trace (A) = 3. If B = adj (adj(2A)), then the val ue of|B| + trace(B) equals:',
      4, -1, 3
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '56', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '132', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '174', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '280', true);
-- Q4 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Suppose that the number of terms in an A.P. is 2k, k N. If the sum of all odd terms of the A.P. is 40, the sum of all even terms is 55 and the last term of the A.P. exceeds the first term by 27, then k is equal to',
      4, -1, 4
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '5', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '8', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '6', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '4', false);
-- Q5 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Let a line pass through two distinct points P( 2, 1, 3) and Q, and be par allel to the vector . If the distance of the poi nt Q from the pointR(1, 3, 3) is 5, then the square of the area of PQR is equal to:',
      4, -1, 5
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '136', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '140', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '144', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '148', false);
-- Q6 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'If = , then the value of equals :',
      4, -1, 6
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '2 and 3', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '3 and 2', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '1 and 3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '2 and 2', false);
-- Q7 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'If x = f(y) is the solution of the differential equation (1 + y 2 ) + = 0, y with f(0) = 1,then f is equal to :',
      4, -1, 7
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'e /4', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'e /12', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'e /3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'e /6', true);
-- Q8 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Let and be the distinct roots of 2x 2 + (cos )x 1 = 0, (0, 2 ). If m and M ar e the minimum and the maximum val ues of , then 16(M + m) equals :',
      4, -1, 8
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '24', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '25', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '27', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '17', false);
-- Q9 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Let A = {1, 2, 3, 4} and B = {1, 4, 9, 16}. Then t he number of many-one functions f : A B such that 1 f(A) is equal to :',
      4, -1, 9
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '127', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '151', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '163', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '139', false);
-- Q10 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'If the system of linear equations : x + y + 2 z = 6, 2x + 3y + az = a + 1, x 3y +bz = 2b, wher e a, b R , ha s infinitel y many solutions, then 7a + 3b is equal to :',
      4, -1, 10
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '9', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '12', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '16', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '22', false);
-- Q11 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Let and be two unit vect ors such that the angl e bet ween them is . If and ar e perpendicular to each other, then the number of val ues of in [ 1, 3] is :',
      4, -1, 11
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '2', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '1', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '0', true);
-- Q12 (Mathematics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Mathematics', 'General', 'single', 'Let E : = 1, a > b and H : = 1. Let the distance between the foci of E and the foci of H be . If a A = 2, and the ratio of the eccentricities of E and H is , then the sum of the lengths of their latus rectums is equal to :',
      4, -1, 12
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '10', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '7', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '8', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '9', false);
-- Q13 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'A symmetric thin biconvex lens is cut into four equal parts by two planes AB and CD as shown in figure. If the power of original lens is 4D then the power of a part of the divided l ens is',
      4, -1, 13
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '8D', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '4D', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'D', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '2D', true);
-- Q14 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'The maximum percentage er ror in the measurment of density of a wire is [Given, mass of wire = (0.60 ± 0.003)g radius of wire = (0.50 ± 0.01)cm length of wire (10.00 ± 0.05)cm]',
      4, -1, 14
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '4', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '5', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '8', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '7', false);
-- Q15 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'For a short dipole placed at origin O, the dipole moment P is along x-axis, as shown in the figure. If the electric potential and electric field at A are V 0 and E 0 , respectively, then the correct com bination of the electric potential and electric field, respectively, at point B on the y-axis is given by',
      4, -1, 15
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'and', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'zer o and', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'zer o and', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'V 0 and', false);
-- Q16 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'Whi ch one of the following is the correct dimensional formula for the capacitance in F ? M, L, T and C stand for unit of mass, length, time and charge,',
      4, -1, 16
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '[F] = [C 2 M 2 L 2 T 2 ]', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '[F] = [CM 2 L 2 T 2 ]', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '[F] = [CM 1 L 2 T 2 ]', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '[F] = [C 2 M 1 L 2 T 2 ]', true);
-- Q17 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'For a diatomic gas, if for rigid molecules and for another diatomic molecules, but also having vibrational modes. Then, which one of the following options is cor rect ? ( Cp and Cv are specific heats of the gas at constant pressure and volume)',
      4, -1, 17
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '2 > 1', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '2 = 1', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '2 2 = 1', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '2 < 1', true);
-- Q18 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'A light source of wavelength illuminates a met al sur face and electrons ar e ej ected with maximum kinetic energy of 2 eV. If the same surface is illuminated by a light source of wavelength , then the maximumkinetic energy ofejected electrons willbe(Theworkfunctionofmetal is1 eV)',
      4, -1, 18
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '2 eV', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '6 eV', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '5 eV', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '3 eV', false);
-- Q19 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'Given below are two statements. One is labelled as Assertion (A) and the other is labelled as Reason (R). Assertion (A) : A simple pendul um is taken to a planet of mass and radius, 4 times and 2 times, respectively, than the Earth. The time period of the pendulum remains same on earth and the planet. Reason (R) : The mass of the pendulum remai ns unchanged at Earth and the other planet. In the light of the above statements, choose the correct answer from the options given below :',
      4, -1, 19
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Both (A) and (R) ar e true but (R) is NOT the cor rect explanation of (A)', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '(A) is true but (R) is false', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '(A) is false but (R) is true', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'Both (A) and (R) ar e true and (R) is the correct expl anation of (A)', false);
-- Q20 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'To obtain the given truth table, following logic NTA Ans.',
      4, -1, 20
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Sol. For NOR gate : gat e should be placed at G : (1)NOR Gate', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'AND Gate', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'NAND Gat e', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'OR Gate 4 Trut h table Bonus', false);
-- Q21 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'Given below ar e two statements. On is labelled as Assertion (A) and the other is labelled as Reason (R). Assertion (A) : the fringes produced by red light ar e closer as com par ed to those produced by blue light. Reason (R) : The fringe width is directly proportional to the wavelength of light. In the light of above statements, choose the correct answer from the options given bel ow :',
      4, -1, 21
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Both (A) and (R) are true and (R) is the correct expl anation of (A)', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '(A) is false but (R) is true.', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'Both (A) and (R) ar e true but (R) is NOT the cor rect explanation of (A) .', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '(A) is true but (R) is false.', false);
-- Q22 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'A ball of mass 100 g is projected with velocity 20 m/s at 60° with horizontal. The decrease in kinetic ener gy of the ball during the motion from point of projection to highest point is :',
      4, -1, 22
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '20 J', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '15 J', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'zer o', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '5 J', false);
-- Q23 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'A transparent film of refractive i ndex, 2.0 is coated on a glass slab of refractive index, 1.45. What is the minimum thickness of transparent film to be coated for the maximum transmission of Green light of wavelength 550 nm. [Assume that the light is inci dent nearly perpendicular to the glass sur face.]',
      4, -1, 23
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '94.8 nm', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '68.7 nm', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '137.5 nm', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '275 nm', false);
-- Q24 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'The tube of length L is shown in the figure. The radius of cross section at the point',
      4, -1, 24
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'is 2 cm and at the point', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'is 1 cm, respectively. If the velocity of wat er entering at point (1) is 2 m/s, then vel ocity of water leaving the point (2) will be : (1)2 m/s (2)4 m/s', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '6 m/s', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '8 m/s', true);
-- Q25 (Physics)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Physics', 'General', 'single', 'Given are statements for certain thermodynamic var iables, (A)Internal energy, volume (V) and mass (M) ar e ext ensive variables. (B)Pressure (P), temperature (T) and density ( ) ar e intensive variables. (C)Volume (V), temperature (T) and density ( ) ar e intensive variables. (D) Mass (M) , tem per ature (T) and internal ener gy ar e extensive variables. Choose the correct answer from the points given bel ow :',
      4, -1, 25
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '(C) and (D) only', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '(D) and (A) only', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '(A) and (B) only', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '(B) and (C) only', false);
-- Q26 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Arrange the following compounds in increasing order of their dipole moment : HBr, H 2 S, NF 3 and CHCl 3',
      4, -1, 26
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'NF 3 < HBr < H 2 S < CHCl 3', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'HBr < H 2 S < NF 3 < CHCl 3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'H 2 S < HBr < NF 3 < CHCl 3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'CHCl 3 < NF 3 < HBr <H 2 S', false);
-- Q27 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Identify the number of structure/s from the following which can be correlated to D-glyceraldehyde.',
      4, -1, 27
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'three', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 't wo', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'four', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'one', false);
-- Q28 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'The maximu m coval ency of a non-met al lic group 15 element ''E'' with weakest E E bond is :',
      4, -1, 28
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '5', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '6', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '4', true);
-- Q29 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Consider the given figure and choose the correct option :',
      4, -1, 29
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Activation energy of backwar d reaction is E 1 and product is more stable than reactant.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'Activation energy of forward reaction is E 1 + E 2 and product is more stable than reactant.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'Activation energy of forward reaction is E 1 + E 2 and product is less stable t han reactant.', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'Act ivation energy of both forwar d and backwar d reaction is E 1 + E 2 and reactant is more stable than product .', false);
-- Q30 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Match the Compounds (List- I) with the appr opriate Catal yst/Reagents (List-II) for their redu ct ion into corresponding amines. List - I (Compounds) List - II (Cata lyst/Reag ents) (A) (I) NaOH (aqueous) (B) (II) H 2 /Ni (C) R C N (III) LiAlH 4 , H 2 O (D) (IV ) Sn, HCl Choose the correct answer from the options given bel ow :',
      4, -1, 30
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '(A)-(III), (B)-(II), (C)-(IV ), (D)-(I)', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '(A)-(II), (B)-(IV ), (C)-(III), (D)-(I)', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '(A)-(II), (B)-(I), (C)-(III), (D)-(IV)', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '(A)-(III), (B)-(IV ), (C)-(II), (D)-(I)', true);
-- Q31 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'The maxi mu m nu mber of RBr produci ng 2-met h ylbutane by above sequence of reactions is _____. (Consider the structural isomer s only)',
      4, -1, 31
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '4', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '5', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '3', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '1', false);
-- Q32 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Match List-I with List- II . List - I (Partial Derivatives) List - II (Thermodynamic Quantity) (A) (I) C P (B) (II) S (C) (III) C V (D) (IV ) V Choose the correct answer from the options given bel ow :',
      4, -1, 32
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '(A)-(II), (B)-(I), (C)-(III), (D)-(IV)', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '(A)-(II), (B)-(I), (C)-(IV), (D)-(III)', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '(A)-(I), (B)-(II), (C)-(IV), (D)-(III)', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '(A)-(II), (B)-(III), (C)-(I), (D)-(IV)', false);
-- Q33 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'The correct order of the following complexes in ter ms of their cr ystal field stabilizat ion energies is :',
      4, -1, 33
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '[ Co (NH 3 ) 4 ] 2+ <[ Co (NH 3 ) 6 ] 2+ <[ Co(en ) 3 ] 3+ <[ Co (NH 3 ) 6 ] 3+', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '[ Co (NH 3 ) 4 ] 2+ <[ Co (NH 3 ) 6 ] 2+ <[ Co(NH 3 ) 6 ] 3+ <[ Co (en ) 3 ] 3+', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '[ Co (NH 3 ) 6 ] 2+ <[ Co (NH 3 ) 6 ] 3+ <[ Co(NH 3 ) 4 ] 2+ <[ Co (en ) 3 ] 3+', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '[ Co ( en ) 3 ] 3+ <[ Co (NH 3 ) 6 ] 3+ <[Co (NH 3 ) 6 ] 2+ <[ Co ( NH 3 ) 4 ] 2+', false);
-- Q34 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Density of 3 M NaCl solution is 1.25 g/mL. The molal ity of the solution is :',
      4, -1, 34
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '1.79 m', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '2 m', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '3 m', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '2.79 m', true);
-- Q35 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Given below are two statements : Stat ement (I) : An element in the extreme left of the periodic table forms acidic oxides. Statement (II) : Acid is formed during the reaction between water and oxide of a reactive element present in the extreme right of the periodic table. In the light of the above statement s, choose the correct answer from the options given below :',
      4, -1, 35
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Statement-I is false but Statem ent- II is true.', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'Both Statement-I and Stat ement- II are false.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'Statement-I is true but Stat ement- II is false.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'Both Statement-I and Stat ement- II are true.', false);
-- Q36 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Given below are two statements : Stat ement (I) : A spectral line will be observed f or a 2p x 2p y t ransition. Stat ement (II) : 2p x and 2p y ar e degenerate orbitals. In the light of the above statement s, choose the correct answer from the options given below :',
      4, -1, 36
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Both Statement-I and Stat ement- II are true.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'Both Statement-I and Stat ement- II are false.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'Statement-I is true but Stat ement- II is false.', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'Statement-I is false but Statem ent- II is true.', true);
-- Q37 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Given bel ow are two statement : Stat ement (I) : Nitrogen, sulphur, halogen and phosphorus present in an organi c compound are Stat ement (II) : The element s present in the compound ar e converted from covalent form into ionic form by fusing the compound with In the light of the above statement s, choose the correct answer from the options given below :',
      4, -1, 37
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Both Statement I and Stat ement II ar e t rue', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'Bo t h Statement I and Statement II ar e f alse', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'Statement I is true but Statement II is false', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'Statement I is false but Statement II is true', false);
-- Q38 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Identify the homoleptic complex(es) that is/are low spin. (A)[Fe(CN) 5 NO] 2 (B)[CoF 6 ] 3 (C)[Fe( CN) 6 ] 4 (D)[Co(NH 3 ) 6 ] 3+ (E) [ Cr(H 2 O) 6 ] 2+ Choose the correct answer from the options given bel ow :',
      4, -1, 38
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '(B) and (E) only', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '(A) and (C) only', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '(C) and (D) only', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '(C) only', false);
-- Q39 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'Given below are two statements : Stat ement (I) : Corrosion is an electrochemical phenomenon in which pure met al acts as an anode and i mpure met al as a cathode. Stat ement (II) : The rate of corrosion is more in al kal ine medi um than in acidic medi um. In the light of the above statement s, choose the correct answer from the options given below :',
      4, -1, 39
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', 'Both Statement I and Stat ement II ar e f alse', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', 'Statement I is false but Statement II is true', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', 'Both Statement I and Stat ement II ar e t rue', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', 'Statement I is true but Statement II is f alse', true);
-- Q40 (Chemistry)
insert into public.questions (
      id, paper_id, subject, topic, type, question_text, positive_mark, negative_mark, order_index
    ) values (
      gen_random_uuid(),
      (select id from public.papers where exam='JEE Mains' and year=2025 and title='JEE Main 2025 Jan 22 Shift 2 — MPC' order by created_at desc limit 1),
      'Chemistry', 'General', 'single', 'The al kane from bel ow having two secondar y hydrogens is :',
      4, -1, 40
    );
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'A', '4-Ethyl-3,4-dimet hyloctane', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'B', '2,2,4,4-Tetramet hylhexane', false);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'C', '2,2,3,3-Tetramet hylpentane', true);
insert into public.choices (id, question_id, label, text, is_correct)
values (gen_random_uuid(), gen_random_uuid(), 'D', '2,2,4,5-Tetramet hylheptane', false);
commit;