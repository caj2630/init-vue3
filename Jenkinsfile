pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'set'
            }
        }
    }

    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}
