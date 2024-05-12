pipeline {
    agent any
    environment {
        DOCKER_COMPOSE_VERSION = '1.25.0' // 사용할 Docker Compose의 버전
        GITLAB_TOKEN = credentials('wns1915_devway') // Jenkins에 저장된 GitLab Token의 ID
    }
    stages {                                            
        stage('Checkout') {
            steps {
                git branch: 'release', credentialsId: 'wns1915_devway', url: 'https://lab.ssafy.com/judy3504/devway.git' // GitLab 리포지토리
            }
        }
		stage('Update Local Repository') {
            steps {
                script {
						withCredentials([usernamePassword(credentialsId: 'wns1915_devway', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
							sh '''
							ENCODED_USERNAME=$(echo $GIT_USERNAME | sed 's/@/%40/g')
							cd /home/ubuntu/devway
							git pull https://$ENCODED_USERNAME:$GIT_PASSWORD@lab.ssafy.com/judy3504/devway.git release
							'''
						}
                }
            }
        }
    }
}
