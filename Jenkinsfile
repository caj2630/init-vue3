pipeline {
    agent any

    environment {
        REPOSITORY='https://github.com/caj2630/init-vue3.git'
    }
    stages {
        stage('pull') {
            steps {
                git '${REPOSITORY}'
            }
        }
        stage('check') {
            steps {
                echo 'check'
            }
        }
        stage('build') {
            steps {
                echo 'build'
            }
        }
    }
}
