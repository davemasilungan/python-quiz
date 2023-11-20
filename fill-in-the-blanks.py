	# IPND Stage 2 Final Project
	# Quiz strings to choose from. * Reorganized strings
easy_quiz = """Python is a programming ___1___ which must be written in a very specific grammar,
or ___2___, in order to avoid ambiguity.

There are many ways to think like a programmer, one way is to demonstrate ___3___ empathy for how
computers and programs work.

When your program doesn't work it's likely because there are mistakes, or ___4___.
Developing a system/nto find and fix ___4___ is crucial to becoming a successful programmer."""

medium_quiz = """In python, sequences of characters surrounded by quotes are called ___1___s.
___1___s can be surrounded by either single or double ___2___s.

Like strings, lists are another type of structured ___3___ but are a sequence of anything (not just characters)
and instead of using quotes you use square brackets.

Python allows you to assign names to values by creating a ___4___, which is introduced with the
assignment statement: Name = Expression.

The simplest callable object in python is called a ___5___.  To define a ___5___ you should use
the syntax def name(input):"""

hard_quiz = """Unlike ___1___s, the value of a ___2___ can be changed through the process of ___3___ after
it's been stored in a ___4___. ___3___ not only effects a ___4___ but also any ___5___es which refer
to the same ___4___.

While a ___6___ ___7___ iterates through a sequence of data types, a ___8___ in a ___7___ lets you stop
executing code if a condition is met within the ___7___."""

	# Quiz answers related to quiz strings. *Changed list lengths to force avoiding use of magic number*
easy_answers = ["language", "syntax", "technological", "bugs"] # 4 items
medium_answers = ["string", "quote","data", "variable", "function"] # 5 items
hard_answers = ["string", "list", "mutation", "variable", "alias", "for", "loop", "break"] # 8 items

	# Defines quiz dictionary. * Reorganized dictionary
quiz_data = {
	'easy': {'quiz_difficulty': easy_quiz,'quiz_answer': easy_answers},
	'medium':{'quiz_difficulty': medium_quiz,'quiz_answer': medium_answers},
	'hard':{'quiz_difficulty':hard_quiz,'quiz_answer': hard_answers}
	}

	# Choices of quiz difficulty.
difficulty_options = ["easy", "medium", "hard"]


	# Function takes in user input to determine quiz difficulty, tests for valid input and returns input if valid.
def difficulty():
	user_difficulty = input("\n  Please type in a game difficulty!\n  Choices include 'easy', 'medium' and 'hard':")
	while user_difficulty not in difficulty_options:
		user_difficulty = input("\n  That is not an option!\n  Choices include 'easy', 'medium' and 'hard', all lower case. Try again:")
	print("\n  You've chosen " + user_difficulty + "!")
	return user_difficulty


	# Function takes in user input to determine the allowed number of attempts and returns user input if input is a valid intiger.
def attempts():
	user_defined_attempts = input("\n  Select the number of mistakes to allow yourself when answering your chosen quiz:")
	if user_defined_attempts.isdigit() != True:
		user_defined_attempts = input("\n  That is not a number, try again. Please type in the number of mistakes to allow yourself:")
	return user_defined_attempts


	# Sets difficulty using difficulty fuction, sets number of attempts allowed with number_attemppts function, defines which
	# quiz string and answer string to use from quiz dictionary, prints first instance of chosen_quiz and uses
	# place_in_quiz funtion to display current quiz state. *** Couldn't find the "variable s" referenced in the Code Review,
	# but changed all the variable names I thought might make things clearer
def take_quiz():
	user_difficulty = difficulty()
	chosen_quiz = quiz_data[user_difficulty]["quiz_difficulty"]
	chosen_answers = quiz_data[user_difficulty]["quiz_answer"]
	place_in_quiz(chosen_quiz, chosen_answers)


		# Function defines and displays number of attempts and takes in user input to replace blanks is quiz. If user input is
		# correct when compared to answer index then user is prompted with 'correct' message and quiz is printed with blank_answer
		# replaced with user input. if not correct,  user is prompted with "incorrect" message and number of attempts is adjusted.
		# Once max answer attempts or all blank spaces in quiz have been filled, end_quiz function runs.
def place_in_quiz(chosen_quiz, chosen_answers):
	user_defined_attempts = int(attempts())
	max_answers = len(chosen_answers)
	answer_index = 0
	minimum_attempts_allowed = 1
	print("\n  You have given yourself " + str(user_defined_attempts) + " attempt(s) to get the right answers for the following quiz: \n")
	print (chosen_quiz)
		# *** Response to Code Review *** I couldn't find the number "3" referenced as a magic number, but I replaced all instances of
		# what I thought might be magic numbers and updated how the function replaces the blanks in the quiz.
	while user_defined_attempts >= minimum_attempts_allowed and answer_index < max_answers:
		blank_to_replace = "___" + str(answer_index + 1) + "___"
		user_answer = input("\n  Please type in the word that " + blank_to_replace + " represents:")
		if user_answer.lower() == chosen_answers[answer_index]:
			chosen_quiz = chosen_quiz.replace(blank_to_replace, user_answer)
			print("\n  Correct!\n")
			print(chosen_quiz)
			answer_index += 1
		else:
			print("\n  That is incorrect!")
			user_defined_attempts -= 1
			print("\n  You now have " + str(user_defined_attempts) + " attempts to get the right answers.")
	end_quiz(user_defined_attempts, minimum_attempts_allowed)


	# If place_in_quiz function completes within the number of attempts allowed, then "successfull" prompt is given
	# or if too many failed attempts are made, user is prompted with "failed" message.
def end_quiz(user_defined_attempts, minimum_attempts_allowed):
	if user_defined_attempts >= minimum_attempts_allowed:
		print("\n\n  You've successfully completed this quiz! GREAT JOB!\n")
	else:
		print("\n\n  Sorry :( You have failed. Please try again!\n")


	# Initiates take_quiz function
take_quiz()
