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
                input message: 'Should i run test? (Click "Proceed" to continue)'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
        stage('Deploy') {
            steps {
                input message: 'Should i run test? (Click "Proceed" to continue)'
                 sh './jenkins/scripts/deploy.sh' 
            }
        }
    }
}