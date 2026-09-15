import { alpha, MenuList, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FlexBoxBetween } from "@/shared/styled";
import { NavButton } from "./NavButton";
import LogoLink from "./LogoLink";
import LanguageSwitch from "./LanguageSwitch";
import theme from "@/theme";
import Logo from '@/assets/unball-logo.png';
import { getRoutePath, type SupportedLang } from "@/i18n/routesMap";

type Props = {
    isTop: boolean;
};

const Navbar = ({ isTop }: Props) => {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.startsWith('en') ? 'en' : 'pt') as SupportedLang;

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
                <LogoLink to={getRoutePath('home', currentLang)}>
                    <FlexBoxBetween sx={{ gap: 2 }}>
                        <img src={Logo} alt="Logo da UnBall" width={40} />
                        <h2 style={{ color: `${theme.palette.primary.main}` }}>UnBall</h2>
                    </FlexBoxBetween>
                </LogoLink>
                <FlexBoxBetween sx={{ gap: 3 }}>
                    <MenuList 
                        sx={{ 
                            display: "flex", 
                            gap: { xs: 1, sm: 2, xl: 4 }, 
                        }}>
                        <MenuItem>
                            <NavButton to={getRoutePath('home', currentLang)} end>
                                {t('navbar.home')}
                            </NavButton>
                        </MenuItem>
                        <MenuItem>
                            <NavButton to={getRoutePath('about', currentLang)}>
                                {t('navbar.about')}
                            </NavButton>
                        </MenuItem>
                        <MenuItem>
                            <NavButton to={getRoutePath('papers', currentLang)}>
                                {t('navbar.papers')}
                            </NavButton>
                        </MenuItem>
                        <MenuItem>
                            <NavButton to={getRoutePath('partners', currentLang)}>
                                {t('navbar.partners')}
                            </NavButton>
                        </MenuItem>
                        <MenuItem>
                            <NavButton to={getRoutePath('contact', currentLang)}>
                                {t('navbar.contact')}
                            </NavButton>
                        </MenuItem>
                    </MenuList>
                    <LanguageSwitch />
                </FlexBoxBetween>
            </FlexBoxBetween>
        </nav>
    );
};

export default Navbar;