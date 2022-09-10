import './Header.css'

export default function Header() {
    return (
        <header>
        <div class="accessibility">
            <a href="#" class="accessibility-link" title="Acessibilidade">
                <i class="uil uil-accessible-icon-alt accessibility-icon"></i>
            </a>
            <a href="#" id="change-contrast" title="Modo Constraste">
                <button class="contrast" role="switch" aria-checked="false" id="contrast">
                </button>
            </a>
            <a href="#" class="accessibility-link" id="increase" title="Aumentar Fonte">
                <i class="uil uil-letter-english-a accessibility-icon"></i>
                <sup>
                    <i class="uil uil-plus"></i>
                </sup>
            </a>
            <a href="#" class="accessibility-link" id="decrease" title="Dimunuir Fonte">
                <i class="uil uil-letter-english-a accessibility-icon"></i>
                <sup>
                    <i class="uil uil-minus"></i>
                </sup>
            </a>
        </div>
        <nav class="nav">
            <a href="#" class="nav-logo" title="Siga 2.0"></a>

            <div class="nav-menu" id="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="./matricula.html" class="nav-link nav-link-active" title="Matrícula">
                            <i class="bi bi-info-circle link-icon"></i>
                            <span class="link-text">Matrícula</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./consultas.html" class="nav-link" title="Consultas">
                            <i class="bi bi-search link-icon"></i>
                            <span class="link-text">Consultas</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./avaliacoes.html" class="nav-link" title="Agenda">
                            <i class="bi bi-calendar4-event link-icon"></i>
                            <span class="link-text">Agenda</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" title="Segurança">
                            <i class="bi bi-shield-check link-icon"></i>
                            <span class="link-text">Segurança</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./solicitacoes.html" class="nav-link" title="Solicitações">
                            <i class="bi bi-chat-square-text link-icon"></i>
                            <span class="link-text">Solicitações</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" title="Upload de Arquivos">
                            <i class="bi bi-file-earmark-arrow-up link-icon"></i>
                            <span class="link-text">Upload Arquivos</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./grade.html" class="nav-link" title="Plano de Ensino">
                            <i class="bi bi-book link-icon"></i>
                            <span class="link-text">Plano de Ensino</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" title="Matriz Inglês">
                            <i class="bi bi-folder2-open link-icon"></i>
                            <span class="link-text">Matriz Inglês</span>
                        </a>
                    </li>
                    <li class="nav-item nav-item-theme">
                        <a href="#" class="nav-link" id="change-theme" title="Mudar Tema">
                            <button class="checkbox" role="switch" aria-checked="false" id="checkbox">
                            </button>
                            <span class="link-text">Mudar Tema</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="nav-options">
                <a href="../index.html" class="nav-link" title="Fazer logout">
                    <i class="bi bi-x-circle-fill link-icon link-exit"></i>
                    <span class="link-text">Sair</span>
                </a>
                <i class="bi bi-list menu-burger" id="nav-toggle"></i>
            </div>
        </nav>
    </header>
    )
}