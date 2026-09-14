import { alpha, MenuList, MenuItem } from "@mui/material";
import { FlexBoxBetween } from "@/shared/styled";
import { NavButton }  from "./NavButton"
import theme from "@/theme";
import Logo from '@/assets/unball-logo.png'

type Props = {
    isTop: boolean;
}

const Navbar = ({
    isTop
}: Props) => {
    return (
        <nav>
            <FlexBoxBetween
                sx={{
                    width: "100%",
                    backgroundColor: isTop ? "background.default" : "secondary",
                    px: 5,
                    height: 80,
                    top: 0,
                    borderBottom: `.71px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
                }}
            >
                <FlexBoxBetween sx={{ gap: 2}}>
                    <img src={Logo} alt="Logo da UnBall" width={40} />
                    <h2 style={{ color: `${theme.palette.primary.main}` }}>UnBall</h2>
                </FlexBoxBetween>
                <FlexBoxBetween>
                    <MenuList 
                        sx={{ 
                            display: "flex", 
                            gap: { xs: 1, sm: 2, xl: 4 }, 
                            
                        }}>
                        <MenuItem><NavButton to="/" end>Início</NavButton></MenuItem>
                        <MenuItem><NavButton to="/sobre-nos">Sobre Nós</NavButton></MenuItem>
                        <MenuItem><NavButton to="/publicacoes">Publicações</NavButton></MenuItem>
                        <MenuItem><NavButton to="/apoiadores">Apoiadores</NavButton></MenuItem>
                        <MenuItem><NavButton to="/contato">Contato</NavButton></MenuItem>
                    </MenuList>
                </FlexBoxBetween>
            </FlexBoxBetween>
        </nav>
    )

}

export default Navbar