const submitButton = document.getElementById('submit-quiz');
const redoButton = document.getElementById('redo-quiz');
const quizForm = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('results');
const feedbackArea = document.getElementById('feedback-area');

if (submitButton) {
    const justifications = {
        q1: 'Incorreto. A concordância correta seria "Seguem anexos os relatórios...", pois o verbo "seguir" concorda com o sujeito "os relatórios" (plural) e o adjetivo "anexo" concorda com o substantivo a que se refere (relatórios -> anexos).',
        q2: 'Incorreto. Após a reforma da Lei de Improbidade, a conduta culposa (como a negligência) não configura mais ato de improbidade, que agora exige dolo (intenção).',
        q3: 'Correto. A Constituição permite a acumulação de um cargo de professor com outro técnico ou científico. O cargo de Técnico do INSS é considerado de natureza técnica.',
        q4: 'Correto. A autotutela (Súmula 473 do STF) é o poder-dever da Administração de anular seus próprios atos quando ilegais e revogá-los por conveniência e oportunidade.',
        q5: 'Incorreto. O modo anônimo apenas impede que o histórico e os cookies fiquem salvos no dispositivo local. O provedor de internet e os sites ainda conseguem identificar a conexão e a atividade.',
        q6: 'Correto. Esta é a equivalência fundamental da condicional (p → q ⇔ ~p ∨ q), conhecida como disjunção.',
        q7: 'Correto. O Art. 194, VII da CF, estabelece a gestão quadripartite, com participação de trabalhadores, empregadores, aposentados e do Governo.',
        q8: 'Incorreto. Pelo princípio da anterioridade nonagesimal (noventena), a nova contribuição só pode ser cobrada 90 dias após a publicação da lei que a instituiu.',
        q9: 'Correto. A idade mínima para filiação como segurado facultativo é de 16 anos.',
        q10: 'Correto. Condomínios e associações, mesmo sem fins lucrativos, são equiparados a empresa para fins de obrigações previdenciárias.',
        q11: 'Incorreto. As horas extras têm natureza remuneratória e, portanto, integram o salário de contribuição.',
        q12: 'Incorreto. O direito ao benefício em si ("fundo de direito") é imprescritível. O prazo de 10 anos (decadência) se aplica ao direito de revisar um benefício já concedido.',
        q13: 'Correto. Utilizar meio fraudulento para obter vantagem ilícita (o benefício) em detrimento da Previdência configura o crime de estelionato qualificado pelo § 3º do Art. 171 do Código Penal.',
        q14: 'Incorreto. Os recursos são julgados por um órgão autônomo, o Conselho de Recursos da Previdência Social (CRPS), para garantir a imparcialidade.',
        q15: 'Correto. O auxílio-acidente tem natureza indenizatória, compensando a perda parcial da capacidade laboral, e não substitui o salário.',
        q16: 'Incorreto. Se ele tiver mais de 120 contribuições E comprovar desemprego involuntário, o prazo pode chegar a 36 meses (12 + 12 + 12).',
        q17: 'Correto. A participação é obrigatória, e a recusa injustificada é uma das hipóteses de suspensão do benefício por incapacidade.',
        q18: 'Incorreto. A idade mínima para aposentadoria por idade rural é de 60 anos para homens e 55 anos para mulheres.',
        q19: 'Correto. Este é o princípio da contagem recíproca, que assegura a portabilidade do tempo de contribuição entre os diferentes regimes.'
    };

    submitButton.addEventListener('click', function() {
        let correctCount = 0;
        let incorrectCount = 0;
        let blankCount = 0;
        feedbackArea.innerHTML = '<h4>Gabarito Comentado</h4>';

        const questions = document.querySelectorAll('.quiz-question');
        questions.forEach((question, index) => {
            const questionName = `q${index + 1}`;
            const correctAnswer = question.getAttribute('data-answer');
            const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            
            question.classList.remove('correct-answer', 'incorrect-answer');

            let feedbackHTML = `<div class="card mb-2"><div class="card-body"><strong>Questão ${index + 1}:</strong> `;

            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                    question.classList.add('correct-answer');
                    feedbackHTML += `<span class="correct-feedback">Sua resposta foi CERTA.</span><br><small>${justifications[questionName]}</small>`;
                } else {
                    incorrectCount++;
                    question.classList.add('incorrect-answer');
                    feedbackHTML += `<span class="incorrect-feedback">Sua resposta foi ERRADA.</span><br><small>${justifications[questionName]}</small>`;
                }
            } else {
                blankCount++;
                 feedbackHTML += `Questão deixada em branco.<br><small>${justifications[questionName]}</small>`;
            }
            feedbackHTML += '</div></div>';
            feedbackArea.innerHTML += feedbackHTML;
        });

        const finalScore = correctCount - incorrectCount;

        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('incorrect-count').textContent = incorrectCount;
        document.getElementById('blank-count').textContent = blankCount;
        document.getElementById('final-score').textContent = finalScore;
        
        quizForm.style.display = 'none';
        submitButton.style.display = 'none';
        resultsDiv.style.display = 'block';
        window.scrollTo(0, 0);
    });

    redoButton.addEventListener('click', function() {
        quizForm.reset();
        document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('correct-answer', 'incorrect-answer'));
        resultsDiv.style.display = 'none';
        quizForm.style.display = 'block';
        submitButton.style.display = 'block';
        window.scrollTo(0, 0);
    });
}
