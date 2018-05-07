#!/bin/bash
blogPath=./src/pages/blog/

read -e -p "Enter blog date [YYYY-MM-DD]: " date
read -e -p "Enter blog title: " title
read -e -p "Enter blog description: " description

function slug() {
    echo "$1" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z
}

cat << EOF > $blogPath$(slug "$title").md
---
date: '$date'
title: $title
templateKey: blog
description: |
    $description
---
Markdown and/or HTML content goes here.
EOF

echo "\nBlog markdown created: " $blogPath$(slug "$title").md
cat $blogPath$(slug "$title").md
