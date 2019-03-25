pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
        stage('Deploy') {
            steps {
                input message: 'Do you want to deploy the application? (Click "Proceed" to continue)'
                 sh './jenkins/scripts/deploy.sh' 
                 input message: 'Shutdown the app? (Click "Proceed" to continue)'
                 sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}