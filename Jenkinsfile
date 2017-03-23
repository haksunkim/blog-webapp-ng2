node{
    stage 'Build'
    sh 'npm install'
    sh 'ng build --prod'
}

node{
    stage 'Deploy'
    // copy file to target location
    sh 'sudo cp dist/* /var/www/blog-webapp'
}