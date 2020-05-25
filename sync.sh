#!/bin/bash
git fetch frontend
git checkout develop
git merge frontend/develop
git push origin develop -f
