## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
Adds any untracked files that are inside the repository folder to Git so that they are staged for the next commit.
#### branch
<!-- Your defnition here -->
Lists all the branches that exist in the current repository and specifies what branch you are in at the moment.
#### checkout
<!-- Your defnition here -->
Switches to the branch specified.
#### clone
<!-- Your defnition here -->
Clones a remote repositry to your computer (remote location), creates an indentical local repository.
#### commit
<!-- Your defnition here -->
Takes a snapshot of all the changes made since the last commit and saves them or creates a new version of the repository.
#### fetch
<!-- Your defnition here -->
Grabs and brings in all the latest changes made inside the remote repository into a special branch in your local repository.
#### log
<!-- Your defnition here -->
Lists the latest commits made in reverse chronological order that are reachable from the current HEAD. 
#### merge
<!-- Your defnition here -->
Merges the branch selected into your active branche.
#### pull
<!-- Your defnition here -->
Fetches and merges changes from the remote repository into the local one.
#### push
<!-- Your defnition here -->
Uploads all the changes made in a local repository to the remote repository on GitHub.
#### reset
<!-- Your defnition here -->
Reverts changes made by taking the active branch and moving it backwards to the commit that is specified.
#### rm
<!-- Your defnition here -->
Removes the files from the staging area, so that they will not be included in the commit. Basically, the opposite of "add".
#### status
Pretty self-explanatory, shows the status of the working repository by listing the files that have been modified but not yet staged for a commit.

## Release 4: Git Workflow

- Push files to a remote repository

* First, navigate to the working repository: $ cd /location/repo
* Check to see if any modified files have not yet been staged: $ git status
* Stage the necessary files for a commit: $ git add /file
* Make a commit specifying what it does: $ git commit -m ""
* Finally, upload all the changes made in the local repo to the remote repo: $ git push

- Fetch changes

* Navigate to the working repository: $ cd /location/repo
* Fetch the changes from the remote repo: $ git fetch upstream
* If merging is desired, then make sure you are on master branch: $ git branch
* Merge the changes: $ git merge upstream/master

- Commit locally

* Navigate to the working repository: $ cd /location/repo
* Check to see if any modified files have not yet been staged: $ git status
* Stage the necessary files for a commit: $ git add /file
* Make a commit specifying what it does: $ git commit -m ""

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

* No errors encountered in the process of completing this challenge.

## Release 6: Reflection
<!-- 
* What parts of your strategy worked? What problems did you face?
* What questions did you have while coding? What resources did you find to help you answer them?
* What concepts are you having trouble with, or did you just figure something out? If so, what?
* Did you learn any new skills or tricks?
* How confident are you with each of the Learning Competencies?
* Which parts of the challenge did you enjoy?
* Which parts of the challenge did you find tedious? -->

* I originally thought that this challenge would somewhat easier compared to all the JavaScript related challenges for this week, but my initial impression was incorrect. I ended up spending more time than I expected researching the learning materials provided. Occasionally, I would also use additional resources in the form of Google, Stackoverflow, gitref.org, Atlassian Documentation, etc. These resources helped me get a better understanding of particular git commands: what they are for, what they do, when to use them. It helped me get through the Release 2. I learned some new git commands that I've never encountered before, although I'm not sure that we are going to be using them anytime soon. Overall, I can't say that I felt 100% confident going through this challenge, but after reading the material I now have a much better grip on git than I did before. I can now perform basic git operations without the help of the convenient Git app but rather by using the command line (in my case, Git Bash since I'm on Windows) only. I found the animated demonstration of git commands on pcottle.github.io to be a lot of fun and a great way to comprehend the material.