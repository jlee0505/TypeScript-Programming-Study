#!/bin/bash
echo "단원명을 ch-# 식으로 입력해주세요. ex) ch-1"

read chapter

if [[ ! $chapter =~ ^ch-[0-9]+$ ]]; then
    echo "올바른 형식이 아닙니다. 단원명은 ch-숫자 형식이어야 합니다."
else
    if [ -d $chapter ]; then
        echo "이미 존재하는 폴더입니다"
    else
        mkdir $chapter
        cd ./$chapter
        touch $chapter.md
        touch $chapter.ts
    fi
fi