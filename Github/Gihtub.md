# GitHub Basic Commands

## **Setup & Configuration**
```sh
# Set global username and email
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Check current Git configuration
git config --list
```

## **Initialize a Repository**
```sh
# Initialize a new Git repository
git init
```

## **Clone a Repository**
```sh
# Clone an existing repository
git clone <repository-url>
```

## **Basic Workflow**
```sh
# Check repository status
git status

# Add changes to staging area
git add <file>         # Add specific file
git add .              # Add all files

# Commit changes with a message
git commit -m "Your commit message"
```

## **Branching & Merging**
```sh
# Create a new branch
git branch <branch-name>

# Switch to another branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# Merge a branch into the current branch
git merge <branch-name>

# Delete a branch
git branch -d <branch-name>
```

## **Push Changes to Remote Repository**
```sh
# Link local repo to a remote repository
git remote add origin <repository-url>

# Push changes to the remote repository
git push -u origin main  # First push
git push                 # Subsequent pushes
```

## **Pull Changes from Remote Repository**
```sh
# Pull latest changes from the remote repository
git pull origin main
```

## **Undo & Reset Changes**
```sh
# Unstage a file but keep changes
git reset <file>

# Undo the last commit but keep changes
git reset --soft HEAD~1

# Discard all local changes
git checkout -- <file>
```

## **Log & History**
```sh
# View commit history
git log

# View commit history in one line
git log --oneline
```

## **Removing & Deleting Files**
```sh
# Remove a file and stage the deletion
git rm <file>

# Remove a file from Git but keep it locally
git rm --cached <file>
```

## 12. **Working with Tags**
```sh
# Create a new tag
git tag <tag-name>

# Push a tag to remote
git push origin <tag-name>

# Delete a tag
git tag -d <tag-name>
```
---
