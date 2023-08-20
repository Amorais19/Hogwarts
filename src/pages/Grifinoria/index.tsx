import * as S from "./styles"
import brasao from "../../assets/brasao.png"
import voltar from "../../assets/voltar.png"
import { ComponentFooter, ComponentCard } from "../../components"

export function Grifinoria() {
    return (
        <>
            <S.Section>
                <section>
                    <div>
                        <img src={brasao} alt="Brasão da Grifinória" />
                        <p id="co">Grifinória</p>
                        <img src={brasao} alt="Brasão da Grifinória" />
                    </div>
                    <nav>
                        <ComponentCard />
                        <p>Essas são as principais características de um aluno da grifinória:</p>
                        <li>Coragem;</li>
                        <li>Cavalheirismo;</li>
                        <li>Ousadia;</li>
                        <li>Determinação.</li>
                    </nav>
                    <a href="/explorar"><img src={voltar} alt="Voltar à tela anterior" /></a>
                </section>
            </S.Section>
            <ComponentFooter />
        </>
    )
}