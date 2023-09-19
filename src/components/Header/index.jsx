import {RiShutDownLine} from 'react-icons/ri'
import {Container,Profile, Logout} from './styles'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/kerolmrts.png"
                alt="Foto"/>
                <div>
                    <span>
                        Bem-vindo
                    </span>
                    <strong>Kerolayne</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
            </Container>
    )
}

