Example: Contribute to an existing repository
```bash
# download a repository on GitHub to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```
Example: Start a new repository and publish it to GitHub
```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```
Example: Contribute to an existing branch on GitHub
```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```
Setting a remote branch as default 
```bash
git branch --set-upstream-to=origin/<remote-branch> <local-branch>
    # or git branch -u origin/<remote-branch> <local-branch>
# automatically pulls in commits from <remote-branch> into local branch 
git pull
# pushes local changes to remote branch
git push origin HEAD:<remote-branch>
```
Error: `fatal: refusing to merge unrelated histories`, [source](https://stackoverflow.com/questions/45272492/git-is-refusing-to-merge-unrelated-histories-what-are-unrelated-histories)
```bash
git pull origin master --allow-unrelated-histories
```