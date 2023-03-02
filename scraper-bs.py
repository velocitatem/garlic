websites = ["https://garlic-vue.netlify.app/"]
# create a crawler for websites, that also supports javascript
# use selenium
# download the chrome driver from https://chromedriver.chromium.org/downloads
# and put it in the same folder as this script
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time

driverPath = "/home/velocitatem/Documents/Projects/garlic/chromedriver"


def get_html(url):
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(executable_path=driverPath, chrome_options=options)
    driver.get(url)
    time.sleep(5)
    html = driver.page_source
    driver.quit()
    return html


def get_data(html):

    soup = BeautifulSoup(html, "html.parser")
    # print all the text on the page
    print(soup.text)




for url in websites:
    get_data(get_html(url))
