# this is a simple crawler that crawls the web and stores the website content in a database
# it is a simple crawler that does not use any advanced techniques
# it also scrapes the content of the website and stores it in the database

from urllib.request import urlopen
import re
import sqlite3
import time
import sys

urls = ["http://localhost:37593"]

# connect to the database
conn = sqlite3.connect('garlic.db')
c = conn.cursor()

# create the table if it does not exist
c.execute('''CREATE TABLE IF NOT EXISTS websites (url text, content text)''')

# create the index if it does not exist
c.execute('''CREATE INDEX IF NOT EXISTS url_index ON websites (url)''')

# commit the changes
conn.commit()

# loop through the urls
for url in urls:
    # check if the url is already in the database
    c.execute('''SELECT * FROM websites WHERE url = ?''', (url,))
    if c.fetchone() is None:
        # if the url is not in the database, then get the content
        try:
            content = urlopen(url).read().decode('utf-8')
            # insert the url and the content into the database
            c.execute('''INSERT INTO websites VALUES (?, ?)''', (url, content))
            # commit the changes
            conn.commit()
            # find all the urls in the content
            urls.extend(re.findall('''href=["'](.[^"']+)["']''', content))
        except:
            # if the url is not valid, then continue
            continue


# close the connection
conn.close()
