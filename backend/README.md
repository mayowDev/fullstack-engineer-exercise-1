# Task Description

You are a new employee for a testing agency that specializes on testing patients for COVID-19. You are asked to __manually__ record all details for each test administered: date, patient name, patient age, test result (POSITIVE/NEGATIVE), and test location (latitude/longitude). Your boss asks you to provide them the following information in a daily report: total tests per day, total positive tests per day, and total tests per country.

You quickly realize that instead of manually inputting this information, you could create an API endpoint to collect this data, and another to return the requested statistics. You do not know the country the test was administered in on submission, only the latitude/longitude, so you must leverage a third-party library to resolve latitude/longitude to country.

# Technology Stack

We have bootstrapped this task using typescript, Express, and MongoDB. You are free to use an alternative web application framework as long as you provide appropriate build instructions.

# Requirements

- Create an API endpoint that accepts new test results
- Create an API endpoint that can be used to generate the daily report (containing total tests per day, total positive tests per day, and total tests per country)
- Leverage a third-party library to resolve latitude/longitude to country

# Items We Look For

- Established software architecture patterns were followed.
- Did you test your code?
- Did you meet the requirements?
- Git best-practices were followed (e.g. branch names, commit messages).
- Some parts of the code might not follow best-practices, feel free to refactor.
