import urllib
import ssl
import re
import numpy

def url(link):
	ssl._create_default_https_context = ssl._create_unverified_context
	req = urllib.request.Request(link)
	with urllib.request.urlopen(req) as response:
		return str(response.read().decode('utf-8'))

class website:
	def __init__(self,link):
		self.link = link
		self.domain = re.sub('/(?:.(?!/)+)$','',link)
		self.site = url(link)
		hrefs = [i for i in re.findall('href="(.*?)"',self.site) if i[0]!='#']
		self.href = []
		for href in hrefs:
			if href[0] == '/' and 'www' not in href:
				self.href.append(self.domain + re.sub('^/+','',href))
			else:
				self.href.append(re.sub('^/+','',href))



