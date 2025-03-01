pipeline {
    agent any
    
    stages {
        stage('Checkout Código') {
            steps {
                git branch: 'amazon', url: 'https://github.com/jdfloresf/WebdriverIO.git'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar Pruebas') {
            steps {
                script {
                    def exitCode = bat(
                        script: 'set user=%BROWSERSTACK_USERNAME% && set key=%BROWSERSTACK_ACCESS_KEY% && npx wdio',
                        returnStatus: true
                    )
                    if (exitCode != 0) {
                        echo "⚠️ Algunas pruebas fallaron, pero continuaremos con el reporte..."
                    }
                }
            }
        }

        stage('Generar Reporte') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            script {
                echo "📌 Guardando reportes de Allure..."
                archiveArtifacts 'allure-results/**'
                archiveArtifacts 'allure-report/**'
            }
        }
        success {
            echo '✅ Pipeline ejecutado con éxito!'
        }
        failure {
            echo '❌ Error en el pipeline, revisa los logs.'
        }
    }
}
