node{
    stage 'Build'
    git url: "https://github.com/haksunkim/blog-webapp-ng2.git"
    sh 'npm install'
    sh 'ng build --prod'
}

node{
    stage 'Deploy'
    // copy file to target location
    sh 'sudo cp dist/* /var/www/blog-webapp'
}