import requests
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC




# Set up Chrome options (optional)
chrome_options = webdriver.ChromeOptions()
 # Optional: Run in headless mode if desired

# Create a Service object for ChromeDriver
service = ChromeService(ChromeDriverManager().install())  # Automatically installs the correct version

# Initialize the WebDriver with the Service object
driver = webdriver.Chrome(service=service, options=chrome_options)




# Navigate to the jobs page
driver.get('https://www.dice.com/jobs?q=Software&countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&currencyCode=USD&language=en')

# Define XPaths for the required information
job_title_xpath = "//a[@class='card-title-link normal']"
company_name_xpath = "//a[@class='ng-star-inserted']"
location_xpath = "//span[@class='search-result-location']"
duration_of_work_xpath = "//span[@data-cy='search-result-employment-type']"

job_titles = WebDriverWait(driver, 10).until(
    EC.presence_of_all_elements_located((By.XPATH, job_title_xpath))
)


# Find elements using the XPaths
job_titles = driver.find_elements(by='xpath', value=job_title_xpath)
company_names = driver.find_elements(by='xpath', value=company_name_xpath)
locations = driver.find_elements(by='xpath', value=location_xpath)
duration_of_work = driver.find_elements(by='xpath', value=duration_of_work_xpath)

# Collect data in a list of dictionaries
jobs_data = []
for i in range(len(job_titles)):  # Assuming all lists have the same length
    jobs_data.append({
        'job_title': job_titles[i].text,
        'company_name': company_names[i].text ,
        'location': locations[i].text ,
        'duration_of_work': duration_of_work[i].text 
    })
print(job_titles[2].text)

response = requests.post("http://localhost:3000/jobs", json=jobs_data)


driver.quit()


