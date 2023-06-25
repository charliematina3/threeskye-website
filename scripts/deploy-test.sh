 #!/bin/bash

# MAKE SURE YOU RUN THIS SCRIPT ON THE ROOT (3skye/front-ends/crm)

# create archive file
tar -czf build.tar.gz ./build

# send archive file and delete from local
scp -rv build.tar.gz public-test.3skye.com:
rm build.tar.gz

DIR=/var/www/public-test.3skye.com

# Send Commands to server
	# backup current code
	# extract sent tar 
	# delete sent tar
	# remove whats in the portal
	# copy new portal in
	# remove old portal
ssh www.3skye.com << EOF
	tar -xf build.tar.gz
 	rm build.tar.gz
	rm -rf $DIR/* 2> /dev/null
	cp -r build/* $DIR
	chmod -R g+w $DIR/*
	rm -rf build
EOF
