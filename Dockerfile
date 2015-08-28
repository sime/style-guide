FROM shawnzhu/ruby-nodejs

RUN apt-get update
RUN apt-get install -y openjdk-7-jre-headless
RUN apt-get -y install fontforge
RUN apt-get install unzip
RUN wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
RUN unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && mv sfnt2woff /usr/local/bin/
RUN gem install fontcustom --no-rdoc --no-ri
RUN gem install s3_website --no-rdoc --no-ri
RUN gem install jekyll --no-rdoc --no-ri

RUN npm install gulp -g
RUN npm install http-server -g

RUN mkdir /style-guide

WORKDIR /style-guide
ADD package.json package.json
RUN npm install
