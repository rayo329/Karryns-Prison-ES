//Basic Strings
const LevelNameSP = "Nivel";
const LevelAbbrSP = "Nv.";
const HPNameSP = "Resistencia"; 
const HPAbbrSP = "Res";
const MPNameSP = "Energía"; 
const MPAbbrSP = "EN";
const TPNameSP = "Placer";
const TPAbbrSP = "Placer";
const EXPNameSP = "Puntos de Experiencia";
const EXPAbbrSP = "EXP";

//Param Strings
const MaxHPNameSP = "Resistencia Máxima";
const MaxMPNameSP = "Energía Máxima";
const AtkNameSP = "Fuerza";
const DefNameSP = "Vigor";
const MatNameSP = "Destreza";
const MdfNameSP = "Mente";
const AgiNameSP = "Agilidad";
const LukNameSP = "Encanto";

const CritDmgNameSP = "Daño Crítico";
const WpAtkNameSP = "Ataque con Armas";
const WpDefNameSP = "Defensa con Armas";
const OverblowProtectionNameSP = "Control de Daño";
const FatigueNameSP = "Fatiga";
const FatigueGainNameSP = "Ganancia de Fatiga";
const FatigueRecoveryNameSP = "Recuperación de Fatiga";
const MaxWillpowerNameSP = "Fuerza de Voluntad Máxima";
const WillpowerNameSP = "Fuerza de Voluntad";
const WillpowerAbbrSP = "Voluntad";
const CooldownTurnsSingularNameSP = "%1 Turno";
const CooldownTurnsPluralNameSP = "%1 Turnos";
const CockinessNameSP = "Arrogancia";


const XParamNameSP = [
"Precisión",
"Evasión",
"Probabilidad De Crítico",
"Evasión Crítica",
"Roce",
"",
"Probabilidad De Contraataque",
"Regen. De Resistencia",
"Regen. De Energía",
"Ganancia De Placer Por Turno"];


const SParamNameSP = [
"Prob. de objetivo",
"Defensa con Armas",
"Recuperación",
"Coste de Hab. de Energía",
"Ataque con Armas",
"Regen. de Voluntad",
"Coste de Hab. de Voluntad",
"Coste de Hab. Sexual",
"Coste de Hab. de Ataque",
"Multiplicador de Experiencia"];


//Elements String

const ElementSlashNameSP = "Cortante";
const ElementPierceNameSP = "Perforante";
const ElementBluntNameSP = "Contundente";
const ElementTalkNameSP = "Comentarios";
const ElementSightNameSP = "Miradas";
const ElementPettingNameSP = "Caricias";
const ElementStripNameSP = "Perder Ropa";
const ElementAlmightyNameSP = "Todopoderoso"; 	 //currently unused
const ElementDrugsNameSP = "Drogas"; 	 //currently unused
const ElementStenchNameSP = "Peste"; 	 //currently unused
const ElementSexNameSP = "Sexo";

//Passive Categories
const PassiveCategoryNameSP = [
"\\I[56]Todas",
"\\I[57]\\C[1]Deseo: Boca",
" ├Boca",
" ├Beso",
" └Mamada",
"\\I[58]\\C[1]Deseo: Tetas",
" ├Tetas",
" ├Pezones",
" └Paja Con Las Tetas",
"\\I[59]\\C[1]Deseo: Coño",
" ├Clítoris",
" ├Coño",
" ├Mojada",
" ├Cunnilingus",
" └Sexo Vaginal",
"\\I[60]\\C[1]Deseo: Culo",
" ├Culo",
" ├Ano",
" └Sexo Anal",
"\\I[61]\\C[1]Deseo: Polla",
" ├Adoración",
" ├Paja",
" ├Bukkake",
" ├Tragar",
" ├Corrida Interna",
" └Relaciones",
"\\I[44]\\C[1]Sadismo",
" ├Estado",
" ├Habilidades", 
" ├Resistir",
" ├Paja Con Los Pies",
" └Dominancia",
"\\I[45]\\C[1]Masoquismo",
" ├Comentarios",
" ├Desventajas",
" ├Anilingus",
" ├Fetichismo",
" └Sumisión",
"\\I[46]\\C[1]Masturbación",
" ├Ansia",
" ├Dormir",
" ├Juguetes",
" └Orgasmo",
"\\I[47]\\C[1]Exhibicionismo",
" ├Miradas",
" ├Vestuario",
" ├Desnudez",
" └Actividades"
];



//Command Strings
const FightNameSP = "Luchar";
const EscapeNameSP = "Huir";
const AttackNameSP = "Atacar"; 
const GuardNameSP = "Listo";
const ItemNameSP = "Objeto";
const SkillNameSP = "Pasivas";
const EquipNameSP = "Equipamiento";
const StatusNameSP = "Estado";
const FormationNameSP = "Grupo";	//currently unused
const SaveNameSP = "Guardar";
const LoadNameSP = "Cargar";
const DeleteNameSP = "Borrar";
const GameEndNameSP = "Cerrar Juego";
const OptionsNameSP = "Opciones";
const WeaponNameSP = "Arma";
const ArmorNameSP = "Accesorio";
const KeyItemNameSP = "Objeto Clave";
const Equip2NameSP = "Equipamiento";
const NewGameNameSP = "Nueva Partida";
const ContinueNameSP = "Continuar";
const ToTitleNameSP = "Título";
const CancelNameSP = "Cancelar";
const BuyNameSP = "Comprar";	//currently unused
const SellNameSP = "Vender";	//currently unused

//Message Strings
const ActionFailureSP = "¡No ha tenido efecto en %1!";
const ActorDamageSP = "\\C[16]¡%1 recibe %2 puntos de daño de resistencia!";
const ActorDrainSP = "¡%3 puntos de %2 de %1 han sido drenados!"; //currently unused
const ActorGainSP = "\\C[11]¡%1 gana %3 %2!";
const ActorLossSP = "\\C[2]¡%1 pierde %3 %2!";
const ActorNoDamageSP = "¡%1 no recibe daño!";
const ActorNoHitSP = "\\C[6]¡Roce! ¡%1 recibe %2 puntos de daño!";
const ActorNoDamageGrazeSP = "¡Roce! ¡%1 no recibe daño!";
const ActorRecoverySP = "¡%3 puntos de %2 de %1 han sido restaurados!"; //currently unused
const CriticalToActorSP = "\\C[10]¡¡Golpe crítico!!";
const CriticalToEnemySP = "¡¡Golpe crítico!!";
const DefeatTextSP = "¡%1 está agotado!"; //currently unused
const EmergeTextSP = "¡%1 aparece!"; //currently unused
const EnemyDamageSP = "¡%1 recibe %2 puntos de daño de resistencia!";
const EnemyDrainSP = "¡%3 puntos de %2 de %1 han sido drenados!"; //currently unused
const EnemyGainSP = "¡%1 gana %3 %2!";
const EnemyLossSP = "¡%1 pierde %3 %2!";
const EnemyNoDamageSP = "\\C[7]¡%1 no recibe daño!";
const EnemyNoHitSP = "\\C[8]¡Roce! %1 recibe %2 puntos de daño!";
const EnemyNoDamageGrazeSP = "\\C[7]¡Roce! %1 no recibe daño!";
const EnemyRecoverySP = "¡%3 puntos de %2 de %1 han sido restaurados!"; //currently unused
const EscapeFailureSP = "¡Pero no han podido escapar!"; //currently unused
const EscapeStartSP = "¡%1 huye!"; //currently unused
const EvasionTextSP = "¡%1 esquiva el ataque!";
const SuperEffectiveTextSP = "¡Ha sido súperefectivo!";
const NotEffectiveTextSP = "No ha sido muy efectivo...";
const SaveFileTextSP = "Partida";
const LoadMessageSP = "¿Qué partida quieres cargar?";
const PreemptiveTextSP = "¡%1 Ha sido atacada sigilosamente";
const SurpriseTextSP = "¡%1 ha sido atacada por sorpresa!";
const UseItemTextSP = "¡%1 usa %2!";
const VictoryTextSP = "¡%1 ha ganado!"; //currently unused
const CounterAttackTextSP = "¡%1 contraataca!";


const WardenNameSP = "Nv De Direct. ";
const WardenLvlLimitSP = "Límite De Nivel De Directora";
const SlutNameSP = "Nivel De Puta ";
const StatLevelNameSP = "Nivel de %1";
const DayNameSP = "Día";
const OrderNameSP = "Orden";
const OrderChangeNameSP = "Control";
const CorruptionNameSP = "Corrupción";
const TitlesNameSP = "Títulos";
const FundingNameSP = "Fondos";
const LedgerNameSP = "《 Libro De Cuentas 》";
const IncomeNameSP = "Ingresos Gen.";
const BarIncomeNameSP = "Ingresos Del Bar";
const StoreIncomeNameSP = "Ingresos Tienda";
const OutsourcingIncomeNameSP = "Ingresos Subcont.";
const NerdBlackmailNameSP = "Chantaje Frikis";
const ExpenseNameSP = "Gastos";
const EstimatedSubsidiesNameSP = "Subsidios Estimados";
const EstimatedProfitNameSP = "Ingresos Est.";
const EstimatedLossNameSP = "Pérdidas Est.";

const SecretaryModeNameSP = "Modo Secretaria";
const WardenModeNameSP = "Modo Guardiana";
const PrisonerModeNameSP = "Modo Prisionera";

//Right Click Status
const RCMenuSleepQualityNegTwoTextSP = "\\C[7]Karryn apenas durmió anoche... \\C[0](\\C[18]Estads. -10%, Encanto -20%\\C[0])";
const RCMenuSleepQualityNegOneTextSP = "\\C[7]Karryn no durmió bien anoche... \\C[0](\\C[2]Estads. -5%, Encanto -10%\\C[0])";
const RCMenuSleepQualityZeroTextSP = "\\C[8]Karryn pudo dormir anoche.\\C[0]";
const RCMenuSleepQualityOneTextSP = "\\C[0]Karryn durmió bien anoche. (\\C[24]Estads. +3%\\C[0])";
const RCMenuSleepQualityTwoTextSP = "\\C[0]Karryn durmió muy bien anoche. (\\C[29]Estads. +6%\\C[0])";
const RCMenuSleepQualityThreeTextSP = "\\C[0]Karryn durmió genial anoche. (\\C[28]Estads. +9%\\C[0])";

const RCMenuFatigueLevelOneTextSP = "\\C[0]Karryn está empezando a cansarse. (\\C[2]Estads. -10%\\C[0])";
const RCMenuFatigueLevelTwoTextSP = "\\C[0]Karryn está cansada... (\\C[2]Estads. -20%\\C[0])";
const RCMenuFatigueLevelThreeTextSP = "\\C[8]Karryn empieza a sentirse agotada... \\C[0](\\C[10]Estads. -30%\\C[0])";
const RCMenuFatigueLevelFourTextSP = "\\C[7]Karryn está agotada... \\C[0](\\C[18]Estads. -40%, No Puedes Escapar\\C[0])";
const RCMenuFatigueLevelFiveTextSP = "\\C[7]Karryn no puede más...... \\C[0](\\C[18]Estads. -50%, No Puedes Escapar\\C[0])";
const RCMenuFatigueLevelFourHardTextSP = "\\C[7]Karryn está agotada... \\C[0](\\C[18]Estads. -40%\\C[0])";
const RCMenuFatigueLevelFiveHardTextSP = "\\C[7]Karryn no puede más...... \\C[0](\\C[18]Estads. -50%\\C[0])";

const RCMenuArousedLevelOneTextSP = "\\C[27]Karryn está cachonda...\\C[0]";
const RCMenuArousedLevelTwoTextSP = "\\C[5]Karryn está muy cachonda...\\C[0]";

const RCMenuFrustratedLevelOneTextSP = "\\C[27]Karryn está frustrada sexualmente...\\C[0]";
const RCMenuFrustratedLevelTwoTextSP = "\\C[5]Karryn está muy frustrada sexualmente...\\C[0]";

const RCMenuNightModeTextSP = "\\C[27]Las pintas de Karryn están llamando la atención...\\C[0]";

const RCMenuLostPantiesTextSP = "\\C[27]Karryn no lleva bragas ahora mismo.\\C[0]";

const RCMenuDefiledHalberdTextSP = "\\C[7]La alabarda de Karryn ha sido mancillada... \\C[0](\\C[18]Desarmada\\C[0])";

const RCMenuMetalSingleTextSP = "\\C[0]Karryn ha subyugado a un recluso metálico hoy. (\\C[11]Experiencia +%1%\\C[0])";
const RCMenuMetalPluralTextSP = "\\C[0]Karryn ha subyugado %2 reclusos metálicos hoy. (\\C[11]Experiencia +%1%\\C[0])";

const RCMenuGiftsSingleTextSP = "\\C[0]Karryn ha recibido un regalo: \\C[0]";
const RCMenuGiftsPluralTextSP = "\\C[0]Karryn ha recibido regalos: \\C[0]";

const RCMenuMealOneTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Experiencia +50%\\C[0])";
const RCMenuMealTwoTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Regen. de Resistencia, Regen. de Energía, Regen. de Voluntad +5%\\C[0])";
const RCMenuMealThreeTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Resistencia +15%, menos daño de orgasmos\\C[0])";
const RCMenuMealFourTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[27]Mayor probabilidad de ponerse cachonda cada turno\\C[0])";
const RCMenuMealFiveTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[27]Sensibilidad del Coño y las Tetas +50%\\C[0])";
const RCMenuMealSixTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Fuerza, Destreza, Agilidad +5%\\C[0])";
const RCMenuMealSevenTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Ganancia de Fatiga -33%\\C[0])";
const RCMenuMealEightTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Resistencia al Sexo y las Caricias +15%\\C[0])";
const RCMenuMealNineTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[11]Probabilidad de Ataque de Enemigos---\\C[0])";
const RCMenuMealTenTextSP = "\\C[0]Karryn ha comido un plato artesanal: (\\C[27]Sensibilidad Anal y de la Boca +50%\\C[0])";

const RCMenuStoreItemOneTextSP = "\\C[0]Karryn ha usado un objeto: (\\C[11]Ganancia de Fatiga -20% \\C[10]Estads. -5%\\C[0])";
const RCMenuStoreItemTwoTextSP = "\\C[0]Karryn ha usado un objeto: (\\C[11]Prob. de Crítico de la Alabarda +25% \\C[10]Defensa de la Alabarda -10%\\C[0])";
const RCMenuStoreItemThreeTextSP = "\\C[0]Karryn ha usado un objeto: (\\C[11]Resist. a Contundente, Perforante y Cortante +25% \\C[10]Regen. de Resistencia -2%\\C[0])";
const RCMenuStoreItemFourTextSP = "\\C[0]Karryn ha usado un objeto: (\\C[11]Resist. a Perder Ropa +30％ \\C[10]Encanto (En Combate) -15%\\C[0])";
const RCMenuStoreItemFiveTextSP = "\\C[0]Karryn ha usado un objeto: (\\C[11]Encanto (En combate) +15% \\C[10]Resist. Comentarios y Perder Ropa -15%\\C[0])";

const PrisonLevelNameSP = "Nivel";
const PrisonLevelStatusUnknownSP = "???????";
const PrisonLevelStatusAnarchySP = "ANARQUÍA";
const PrisonLevelStatusSubjugatedSP = "Subyugado";
const PrisonLevelStatusRiotingSP = "AMOTINADO";

const PrisonMapLevelNameSP = "Nivel %1: ";
const PrisonMapOutsideNameSP = "Fuerte Ganon: ";
const PrisonMapUnknownNameSP = "Algún Lugar";
const PrisonMapUndiscoveredNameSP = "???";
const PrisonMapWeddingNameSP = "Mitad de mi Boda";
const PrisonMapLevelFiveNameSP = "Nivel 5";
const PrisonMapEndlessPrisonNameSP = "Batalla de Prisión Infinita";
const PrisonMapEndlessHellNameSP = "Batalla Infernal Infinita";
const PrisonMapCustomNameSP = "Batalla Personalizada";


//カリンのレベル
const KissingLevelSP = "Nivel de Beso";
const PettingLevelSP = "Nivel de Caricias";
const HandjobLevelSP = "Nivel de Paja";
const BlowjobLevelSP = "Nivel de Mamada";
const FootjobLevelSP = "Nivel de Paja con los Pies";
const RimjobLevelSP = "Nivel de Anilingus";
const TittyFuckLevelSP = "Nivel de Paja con las Tetas";
const PussyLevelSP = "Nivel de Sexo Vaginal";
const AnalLevelSP = "Nivel de Sexo Anal";
const MasturbationLevelSP = "Nivel de Masturbación";
const SadismLevelSP = "Nivel de Sadismo";
const MasochismLevelSP = "Nivel de Masoquismo";

const MouthSensitivitySP = "Sensibilidad de la Boca";
const FingerSensitivitySP = "Sensibilidad de la Mano";
const BoobsSensitivitySP = "Sensibilidad de las Tetas";
const NipplesSensitivitySP = "Sensibilidad de los Pezones";
const ClitorisSensitivitySP = "Sensibilidad del Clítoris";
const PussySensitivitySP = "Sensibilidad del Coño";
const ButtSensitivitySP = "Sensibilidad del Culo";
const AnalSensitivitySP = "Sensibilidad Anal";
const FootSensitivitySP = "Sensibilidad de los Pies";
const TalkSensitivitySP = "Sensibilidad a los Comentarios";
const SightSensitivitySP = "Sensibilidad a las Miradas";
const SwallowSensitivitySP = "Sensibilidad a Tragar";
const PussyCreampieSensitivitySP = "Sensibilidad a las Corridas Vaginales";
const AnalCreampieSensitivitySP = "Sensibilidad a las Corridas Anales";
const BukkakeSensitivitySP = "Sensibilidad a los Bukkakes";
const ButtSpankingSensitivitySP = "Sensibilidad a los Azotes";

//Status Menu
const StatusMenuPrimarySP = "Primarios";
const StatusMenuSecondarySP = "Secundarios";
const StatusMenuProfileSP = "Perfil";
const StatusMenuTertiarySP = "Terciarios";
const StatusMenuRecordsSP = "Registro";
const StatusMenuDesiresSP = "Deseos";
const StatusMenuEffectsSP = "Condición";

const StatusMenuStatsSP = "Estadísticas";
const StatusMenuStatLevelsSP = "《 Niveles de Estadísticas 》";
const StatusMenuAttributesSP = "《 Atributos 》";
const StatusMenuResistsSP = "《 Resistencias 》";
const StatusMenuLevelsSP = "《 Niveles Sexuales 》";
const StatusMenuSensitivitiesSP = "《 Sensibilidades 》";

const StatusMenuMouthDesireReqSP = "《 Requisitos de Deseo: Boca 》";
const StatusMenuBoobsDesireReqSP = "《 Requisitos de Deseo: Tetas 》";
const StatusMenuPussyDesireReqSP = "《 Requisitos de Deseo: Coño 》";
const StatusMenuButtDesireReqSP = "《 Requisitos de Deseo: Culo 》";
const StatusMenuCockDesireReqSP = "《 Requisitos de Deseo: Polla 》";

const ProfileNameTextSP = "Nombre:";
const ProfileAgeTextSP = "Edad:";
const ProfileThreeSizesTextSP = "Tres Medidas:";
const ProfileBioTextSP = "Biografía";

const ProfileNameSP = "Karryn";
const ProfileThreeSizesSP = "110(Copa K)-59-100cm (43-23-39 pulgadas)";
const ProfileThreeSizesHCupSP = "(Copa H)96-59-100cm (38-23-39 pulgadas)";
const ProfileThreeSizesPCupSP = "(Copa P)134-59-100cm (53-23-39 pulgadas)";
const ProfileBio_One_SP = [
"Karryn es una prodigio que ha abrumado a sus competidores usando sus talentos y logros desde siempre.",
"Sus espectaculares resultados le han permitido catapultarse a la élite del Imperio Zanados.",
"En poco tiempo, se convirtió en la secretaria exclusiva del emperador, demostrando que no tenía ningún igual.",
"Además, fue bendecida con una cara bonita y un cuerpazo, su seguridad en si misma y su orgullo no se quedan atrás"
];

const ProfileRecordFirstSP = "Primero: ";
const ProfileRecordLastSP = "Último: ";
const ProfileRecordSecretSP = "  \\C[7]Secreto\\C[0]";
const ProfileRecordNeverSP = "  \\C[29]Nunca\\C[0]";

const ProfileRecordKissSP = "Beso";
const ProfileRecordSexSP = "Sexo";
const ProfileRecordAnalSP = "Anal";
const ProfileRecordHandjobSP = "Paja";
const ProfileRecordBlowjobSP = "Mamada";
const ProfileRecordTittyFuckSP = "Paja con las Tetas";
const ProfileRecordFootjobSP = "Paja con los Pies";
const ProfileRecordRimjobSP = "Annilingus";
const ProfileRecordSwallowSP = "Tragar Semen";
const ProfileRecordPussyCreampieSP = "Corrida Vaginal";
const ProfileRecordAnalCreampieSP = "Corrida Anal";
const ProfileRecordBodyBukkakeSP = "Bukkake Corporal";
const ProfileRecordFaceBukkakeSP = "Corrida Facial";

const ProfileRecordCunnilingusSP = "Cunnilingus";
const ProfileRecordSuckFingersSP = "Chupar Dedos";
const ProfileRecordButtSpankSP = "Azotar el Culo";
const ProfileRecordBoobsPettingSP = "Manosear Tetas";
const ProfileRecordNipplesPettingSP = "Manosear Pezones";
const ProfileRecordClitPettingSP = "Manosear Clítoris";
const ProfileRecordPussyPettingSP = "Manosear Coño";
const ProfileRecordButtPettingSP = "Manosear Culo";
const ProfileRecordAnalPettingSP = "Manosear Ano";
const ProfileRecordClitToySP = "Juguete de Clítoris";
const ProfileRecordPussyToySP = "Juguete Vaginal";
const ProfileRecordAnalToySP = "Juguete Anal";
const ProfileRecordPussySexSP = "Sexo Vaginal";
const ProfileRecordAnalSexSP = "Sexo Anal";


const ProfileRecordFirstKissSP = "   Di mi primer beso a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstKissWasPenisSP = "   Di mi primer beso a la polla de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstKissWasAnusSP = "   Di mi primer beso al ano de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordLastKissSP = "   Besé a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstSexSP = "   Perdí mi virginidad con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstPussySexWasDildoSP = "   Perdí mi virginidad con el consolador de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastSexSP = "   Tuve sexo con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstAnalSP = "   Perdí mi virginidad anal con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastAnalSP = "   Tuve sexo anal con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstHandjobSP = "   Hice mi primera paja el \\C[26]Día %1\\C[0] en %3 con la polla de \\C[31]%2\\C[0].";
const ProfileRecordLastHandjobSP = "   Le hice una paja a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstBlowjobSP = "   Mi primera mamada fue el \\C[26]Día %1\\C[0] en %3 con la polla de \\C[31]%2\\C[0].";
const ProfileRecordLastBlowjobSP = "   Le hice una mamada a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstTittyFuckSP = "   Le Hice mi primera paja con las tetas a \\C[31]%2\\C[0] el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastTittyFuckSP = "   Le hice una paja con las tetas a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordFirstFootjobSP = "   Le Hice mi primera paja con los pies a \\C[31]%2\\C[0] el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastFootjobSP = "   Le hice una paja con los pies a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstRimjobSP = "   Hice mi primer anilingus a \\C[31]%2\\C[0] el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastRimjobSP = "   Le comí el culo a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordFirstBukkakeSP = "   \\C[31]%2\\C[0] me hizo mi primer bukkake el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastBukkakeSP = "   \\C[31]%2\\C[0] se corrió sobre mí en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstFaceBukkakeSP = "   Mi primera corrida en la cara fue de \\C[31]%2\\C[0], el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastFaceBukkakeSP = "   \\C[31]%2\\C[0] se corrió en mi cara en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordFirstSwallowSP = "  Probé semen por primera vez el \\C[26]Día %1\\C[0] en %3, era de \\C[31]%2\\C[0].";
const ProfileRecordLastSwallowSP = "   Me tragué el semen de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstPussyCreampieSP = "   Dejé que \\C[31]%2\\C[0] se corriera en mi coño en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastPussyCreampieSP = "   Dejé que \\C[31]%2\\C[0] se corriera en mi coño en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstAnalCreampieSP = "   Dejé que \\C[31]%2\\C[0] se corriera en mi culo en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastAnalCreampieSP = "   \\C[31]%2\\C[0] me llenó el culo de leche en %3 el \\C[26]Día %1\\C[0].";


const StatusRecordDaysSingularSP = "día";
const StatusRecordDaysPluralSP = "días totales";
const StatusRecordTimesSingularSP = "vez";
const StatusRecordTimesPluralSP = "veces";
const StatusRecordJustPeopleSingularSP = "persona";
const StatusRecordJustPeoplePluralSP = "personas";
const StatusRecordDifferentPeopleSingularSP = "persona";
const StatusRecordDifferentPeoplePluralSP = "personas distintas";

const StatusRecordDateSP = "He pasado %1 días en la prisión.";
const StatusRecordDateSlutSP = "He pasado %1 maravillosos días en el Fuerte Ganon.♥";
const StatusRecordFightSP = "He subyugado a %1 personas y he perdido %2 veces.";
const StatusRecordFightSlutSP = "He subyugado a %1 personas y solo he 'perdido' %2 veces.♥";
const StatusRecordFightSubduedOnlySP = "He subyugado a %1 personas.";
const StatusRecordStripSP = "Me han desnudado %1 veces y otras personas me han quitado las bragas %2 veces.";
const StatusRecordStripSlutSP = "He dejado que me desnuden %1 veces y que otras personas me quiten las bragas %2 veces.♥";
const StatusRecordKissSP = "Me han besado %1 veces %2 personas distintas.";
const StatusRecordKissSlutSP = "Me he besado %1 veces con %2 personas distintas.♥";
const StatusRecordBoobsPettedSP = "Me han tocado las tetas %1 veces %2 personas distintas.";
const StatusRecordBoobsPettedSlutSP = "He dejado que me toquen las tetas %1 veces %2 personas distintas.♥";
const StatusRecordNipplesPettedSP = "Me han pellizcado los pezones %1 veces %2 personas distintas.";
const StatusRecordNipplesPettedSlutSP = "He dejado que me pellizquen los pezones %1 veces %2 personas distintas.♥";
const StatusRecordClitPettedSP = "Me han tocado el clítoris %1 veces %2 personas distintas.";
const StatusRecordClitPettedSlutSP = "Me he dejado tocar el clítoris %1 veces por %2 personas distintas.♥";
const StatusRecordPussyPettedSP = "Me han metido los dedos en el coño %1 veces %2 personas distintas.";
const StatusRecordPussyPettedSlutSP = "Me he dejado meter los dedos en el coño %1 veces por %2 personas distintas.♥";
const StatusRecordButtPettedSP = "Me han tocado el culo %1 veces %2 personas distintas.";
const StatusRecordButtPettedSlutSP = "Me he dejado tocar el culo %1 veces por %2 personas distintas.♥";
const StatusRecordAnalPettedSP = "Me han metido los dedos por el culo %1 veces %2 personas distintas.";
const StatusRecordAnalPettedSlutSP = "Me he dejado meter los dedos por el culo %1 veces por %2 personas distintas.♥";
const StatusRecordMasturbateSP = "Me he masturbado %1 veces y he visto a otros hacerlo %2 veces.";
const StatusRecordMasturbateSlutSP = "Solo me he masturbado %1 veces y he visto a otros hacerlo %2 veces.♥";
const StatusRecordSexPartnersSP = "He tenido sexo con %1 personas.";
const StatusRecordSexPartnersSlutSP = "Solo me he follado a %1.♥";
const StatusRecordHandjobSP = "He hecho %1 pajas a %2 personas distintas.";
const StatusRecordHandjobSlutSP = "He hecho solo %1 pajas a %2 personas distintas.♥";
const StatusRecordBlowjobSP = "He hecho %1 mamadas a %2 personas distintas.";
const StatusRecordBlowjobSlutSP = "He hecho solo %1 mamadas a %2 personas distintas.♥";
const StatusRecordTittyFuckSP = "Me han follado las tetas %1 veces %2 personas distintas.";
const StatusRecordTittyFuckSlutSP = "He hecho solo %1 pajas con las tetas a %2 personas distintas.♥";
const StatusRecordFootjobSP = "He hecho %1 pajas con los pies a %2 personas distintas.";
const StatusRecordFootjobSlutSP = "He hecho solo %1 pajas con los pies to %2 personas distintas.♥";
const StatusRecordRimjobSP = "He hecho %1 anilingus a %2 personas distintas.";
const StatusRecordRimjobSlutSP = "He comido culo %1 veces a %2 personas distintas.♥";
const StatusRecordCunniSP = "Me han hecho un cunnilingus %1 veces %2 personas distintas.";
const StatusRecordCunniSlutSP = "Me han comido el coño %1 veces %2 personas distintas.♥";
const StatusRecordSpankedSP = "Me han azotado %1 veces %2 personas distintas.";
const StatusRecordSpankedSlutSP = "Me han azotado solo %1 veces %2 personas distintas.♥";
const StatusRecordPussySexSP = "Me han follado el coño %1 veces %2 personas distintas.";
const StatusRecordPussySexSlutSP = "Me han follado el coño solo %1 veces %2 personas distintas.♥";
const StatusRecordAnalSexSP = "Me han follado el culo %1 veces %2 personas distintas.";
const StatusRecordAnalSexSlutSP = "Me han follado por el culo %1 veces %2 personas distintas.♥";
const StatusRecordGangbangSP = "Me han hecho doble penetración %1 veces, y un gangbang %2 veces.";
const StatusRecordGangbangSlutSP = "Me han hecho doble penetración solo %1 veces y un gangbang solo %2 veces.♥";
const StatusRecordOrgasmSP = "Me he corrido %1 veces delante de %2 personas distintas, un total de %3 ml de fluidos.";
const StatusRecordOrgasmSlutSP = "Came %1 whole veces delante de %2 personas distintas, un total de %3 ml de fluidos.♥";
const StatusRecordSwallowSP = "He bebido semen %1 veces, en total %3 ml de semen de %2 personas distintas.";
const StatusRecordSwallowSlutSP = "He bebido semen solo %1 veces, en total %3 ml de semen de %2 personas distintas.♥";
const StatusRecordPussyCreampieSP = "Se han corrido en mi coño %1 veces, en total %3 ml de semen de %2 personas distintas.";
const StatusRecordPussyCreampieSlutSP = "Se han corrido en mi coño solo %1 veces, en total %3 ml de semen de %2 personas distintas.♥";
const StatusRecordAnalCreampieSP = "Se han corrido en mi culo %1 veces, en total %3 ml de semen de %2 personas distintas.";
const StatusRecordAnalCreampieSlutSP = "Se han corrido en mi culo solo %1 veces, en total %3 ml de semen de %2 personas distintas.♥";

const StatusRecordFingersSuckedSP = "He chupado los dedos de %2 personas %1 veces.";
const StatusRecordFingersSuckedSlutSP = "He chupado los dedos de %2 personas solo %1 veces.♥";
const StatusRecordBukkakeSP = "Me han hecho un bukkake %1 veces, en total %3 ml de semen de %2 personas distintas.";
const StatusRecordBukkakeSlutSP = "Me han hecho un bukkake solo %1 veces, en total %3 ml de semen de %2 personas distintas.♥";
const StatusRecordFaceBukkakeSP = "Se han corrido en mi cara %1 veces, en total %3 ml de semen de %2 personas distintas.";
const StatusRecordFaceBukkakeSlutSP = "Se han corrido en mi cara solo %1 veces, en total %3 ml de semen de %2 personas distintas.♥";

//StatusBattleEffectはステータスメニューの「状態」に書いてる
const StatusBattleEffectOrgasmSP = "¡Karryn \\C[5]acaba de correrse\\C[0]! ¡No puede ni moverse ni actuar!";
const StatusBattleEffectCoolSP = "¡Karryn está \\C[4]tranquila\\C[0] por tener poco deseo!\n¡Su precisión, evasión, prob. de Crít., evasión crit. y regens. han subido un poco.";
const StatusBattleEffectIsHornyZeroSP = "¡Karryn está \\C[18]cachonda\\C[0]! Sus resistencias sexuales han bajado.";
const StatusBattleEffectIsHornyOneSP = "¡Karryn está \\C[18]cachonda\\C[0]! Sus resistencias sexuales han bajado, y sus deseos subirán cada turno.";
const StatusBattleEffectIsHornyTwoSP = "¡Karryn está \\C[18]cachonda\\C[0]! Sus resistencias sexuales han bajado,\nSuprimir Deseos cuesta más y sus deseos subirán cada turno.";
const StatusBattleEffectIsHornyThreeSP = "¡Karryn está \\C[18]cachonda\\C[0]! Su evasión, precisión y sus resistencias sexuales han bajado,\nSuprimir Deseio cuesta más y sus deseos subirán cada turno.";
const StatusBattleEffectIsArousedSP = "¡Karryn está \\C[27]excitada\\C[0]! Su coño se irá \\C[23]mojando\\C[0] más cada turno.";
const StatusBattleEffectNotArousedSP = "¡Karryn no está excitada ahora mismo. Debe estar excitada para que se le moje el coño.";
const StatusBattleEffectIsWetSP = "¡Karryn está \\C[23]mojada\\C[0]! Ahora puede ser penetrada vaginalmente.";
const StatusBattleEffectNotWetSP = "¡Karryn no está mojada ahora mismo. No puede ser penetrada vaginalmente.";
const StatusBattleEffectIsWearingPantiesSP = "¡Karryn lleva bragas. Necesita perder mucha más ropa antes de que su entrepierna pueda ser accesible.";
const StatusBattleEffectIsNotWearingPantiesSP = "¡Karryn \\C[27]no lleva bragas\\C[0]! Necesita perder solo un poco de ropa antes de que su entrepierna pueda ser accesible.";
const StatusBattleEffectIsVirginPublishedSP = "¡Karryn es una \\C[27]virgen confirmada\\C[0]! Su encanto en combate ha aumentado.";
const StatusBattleEffectIsVirginHighSP = "¡Karryn está \\C[27]bajo sospecha de ser virgen\\C[0]! Su encanto en combate ha aumentado.";
const StatusBattleEffectIsVirginMedSP = "¡Se rumorea que Karryn es \\C[27]virgen\\C[0]! Su encanto en combate ha aumentado un poco.";
const StatusBattleEffectIsVirginLowSP = "¡Karryn sigue siendo \\C[27]virgen\\C[0] pero nadie se lo cree! Su encanto en combate no se ve modificado.";

const StatusBattleEffectIsConfidentZeroSP = "¡Karryn está \\C[30]confiada\\C[0]! ¡Sus estadísticas aumentan!";
const StatusBattleEffectIsConfidentOneSP = "¡Karryn está \\C[30]confiada\\C[0]! ¡Sus estadísticas aumentan en base a su arrogancia!";

const StatusBattleEffectIsFrustratedSP = "¡Karryn está \\C[18]frustrada sexualmente\\C[0]! ¡Aumenta su ataque, pero su Defensa, Agilidad, Precisión y Evasión Crítica se reducen!";

const StatusBattleEffectDisarmedSP = "¡Karryn está \\C[18]desarmada\\C[0]! Necesitará acercarse a su alabarda para rearmarse.";
const StatusBattleEffectDefiledHalberdSP = "¡\\C[18]La alabarda ha sido mancillada\\C[0]! Karryn no puede usar su alabarda hasta que descanse en su oficina o en un puesto de guardia.";
const StatusBattleEffectOffBalancedSP = "¡Karryn ha \\C[18]perdido el equilibrio\\C[0]! Su ataque, defensa y evasión han disminuido.";
const StatusBattleEffectWeakenSP = "¡Karryn está \\C[18]debilitada\\C[0]! Su fuerza y ataque han disminuido.";
const StatusBattleEffectDizzySP = "¡Karryn está \\C[18]mareada\\C[0]! Su precisión y evasión han disminuido.";
const StatusBattleEffectSlowSP = "¡Karryn está \\C[18]ralentizada\\C[0]! Su agilidad ha disminuido mucho.";
const StatusBattleEffectVulnerableSP = "¡Karryn es \\C[18]vulnerable\\C[0] ahora mismo! Su defensa ha disminuido.";
const StatusBattleEffectPoisonSP = "¡Karryn está \\C[18]envenenada\\C[0]! Su resistencia se reduce cada turno en lugar de regenerarse.";
const StatusBattleEffectYetiHeatAuraOneSP = "¡Karryn está siendo afectada por \\C[18]el calor del Yeti\\C[0]! Su regeneración de resistencia se reduce mucho.";
const StatusBattleEffectYetiHeatAuraTwoSP = "¡Karryn está siendo afectada por \\C[18]el calor del Yeti\\C[0]! Su regeneración de resistencia y fuerza de voluntad se reduce mucho.";
const StatusBattleEffectExposeWeaknessSP = "¡\\C[18]Las debilidades de Karryn han sido descubiertas\\C[0]! Su evasión, evasión crítica y sus resistencias han disminuido.";
const StatusBattleEffectAttackComboSP = "¡Karryn ha atacado \\C[2]%1 veces consecutivas\\C[0]! El daño, precisión y coste de su próximo ataque será mayor.";
const StatusBattleEffectAttackComboCockySP = "Atacar cuatro o más veces consecutivas aumentará su \\C[30]arrogancia\\C[0].";
const StatusBattleEffectSexComboOneSP = "¡Karryn ha usado habilidades sexuales \\C[2]%1 veces consecutivas\\C[0]! El daño de placer y el coste de su próxima habilidad sexual, que no sea de acariciar, será mayor.";
const StatusBattleEffectSexComboTwoSP = "Usar de forma consecutiva la misma habilidad sexual (que no sea de acariciar) contra el mismo objetivo, aumentará mucho su daño de placer y coste.";

const StatusBattleEffectDanceComboSP = "¡Karryn ha usado sus habilidades de stripper \\C[2]%1 veces consecutivas\\C[0]! El daño de placer y el coste de resistencia de su próxima habilidad de stripper será mayor.";


//Tooltipsは戦闘画面のステートTooltipに表示される
const StateTooltipsRemainingTurnsSingularSP = "\\c[27](Queda 1 Turno)\\c[0]";
const StateTooltipsRemainingTurnsPluralSP = "\\c[27](Quedan %1 Turnos)\\c[0]";

const StateTooltipsOrgasmSP = "¡Karryn \\C[5]acaba de correrse\\C[0]!\n¡No puede ni moverse ni actuar!";
const StateTooltipsSlashStanceSP = "%1 recibirá más daño y\nserá más fácil de golpear con un \\C[4]ataque Perforante.\\C[0]\nPero recibirá menos daño y\nserá más difícil de golpear con un \\C[2]ataque Contundente.\\C[0]";
const StateTooltipsPierceStanceSP = "%1 recibirá más daño y\nserá más fácil de golpear con un \\C[2]ataque Contundente.\\C[0]\nPero recibirá menos daño y\nserá más difícil de golpear con un \\C[3]ataque Cortante.\\C[0]";
const StateTooltipsBluntStanceSP = "%1 recibirá más daño y\nserá más fácil de golpear con un \\C[3]ataque Cortante.\\C[0]\nPero recibirá menos daño y\nserá más difícil de golpear con un \\C[4]ataque Perforante.\\C[0]";
const StateTooltipsHornyZeroSP = "¡Karryn está \\C[18]cachonda\\C[0]!\nSus resistencias sexuales han bajado.";
const StateTooltipsHornyOneSP = "¡Karryn está \\C[18]cachonda\\C[0]!\nSus resistencias sexuales han bajado,\ny sus deseos subirán cada turno.";
const StateTooltipsHornyTwoSP = "¡Karryn está \\C[18]cachonda\\C[0]!\nSus resistencias sexuales han bajado,\nSuprimir Deseos cuesta más,\ny sus deseos subirán cada turno.";
const StateTooltipsHornyThreeSP = "¡Karryn está \\C[18]cachonda\\C[0]!\nSu evasión, precisión y sus resistencias sexuales han bajado,\nSuprimir Deseos cuesta más,\ny sus deseos subirán cada turno.";



const StateTooltipsEnemyHornySP = "%1 está \\C[18]cachondo\\C[0]!\nTiene más probabilidad de actuar, menos probabilidad de atacar, resistencias más bajas\nrequisitoss de encanto más bajos, y eyaculará más.";

const StateTooltipsCoolSP = "¡Karryn está \\C[4]tranquila\\C[0] por tener poco deseo!\n¡Su precisión, evasión, prob. de Crít., evasión crit.\n y regens. han subido un poco.";

const StateTooltipsIsWetSP = "¡Karryn está \\C[23]mojada\\C[0]!\nAhora puede ser penetrada vaginalmente.";
const StateTooltipsNotWetSP = "¡Karryn no está mojada ahora mismo.\nNo puede ser penetrada vaginalmente.";
const StateTooltipsWearingPantiesSP = "¡Karryn lleva bragas.\nNecesita perder mucha más ropa\nantes de que su entrepierna pueda ser accesible.";
const StateTooltipsNotWearingPantiesSP = "¡Karryn \\C[27]no lleva bragas\\C[0]! \nNecesita perder solo un poco de ropa antes de que su entrepierna pueda ser accesible.";
const StateTooltipsVirginPublishedSP = "¡Karryn es una \\C[27]virgen confirmada\\C[0]!\nSu encanto en combate ha aumentado.";
const StateTooltipsVirginHighSP = "¡Karryn está \\C[27]bajo sospecha de ser virgen\\C[0]!\nSu encanto en combate ha aumentado.";
const StateTooltipsVirginMedSP = "¡Se rumorea que Karryn es \\C[27]virgen\\C[0]!\nSu encanto en combate ha aumentado un poco.";
const StateTooltipsVirginLowSP = "¡Karryn sigue siendo \\C[27]virgen\\C[0] pero nadie se lo cree!\nSu encanto en combate no se ve modificado.";
const StateTooltipsConfidentZeroSP = "¡Karryn está \\C[30]confiada\\C[0]!\n¡Sus estadísticas aumentan!";
const StateTooltipsConfidentOneSP = "¡Karryn está \\C[30]confiada\\C[0]!\n¡Sus estadísticas aumentan en base a su arrogancia!";
const StateTooltipsFrustratedSP = "¡Karryn está \\C[18]frustrada sexualmente\\C[0]!\n¡Aumenta su ataque, pero su Defensa, Agilidad,\nPrecisión y Evasión Crítica se reducen!";
const StateTooltipsDisarmedSP = "¡¡Karryn está \\C[18]desarmada\\C[0]!!\nNecesitará acercarse a su alabarda para rearmarse.";
const StateTooltipsOffBalancedSP = "¡%1 ha \\C[18]perdido el equilibrio\\C[0]!\nSu ataque, defensa y evasión han disminuido.";
const StateTooltipsWeakenSP = "¡%1 sufre \\C[18]debilidad\\C[0]!\nSu fuerza y ataque han disminuido.";
const StateTooltipsDizzySP = "¡%1 sufre \\C[18]mareo\\C[0]!\nSu precisión y evasión han disminuido.";
const StateTooltipsSlowSP = "¡%1 sufre \\C[18]ralentización\\C[0]!\nSu agilidad ha disminuido mucho.";
const StateTooltipsVulnerableSP = "¡%1 sufre \\C[18]vulnerabilidad\\C[0] ahora mismo!\nSu defensa ha disminuido.";
const StateTooltipsPoisonSP = "¡%1 sufre \\C[18]envenenamiento\\C[0]!\nSu resistencia se reduce cada turno en lugar de regenerarse."; 
const StateTooltipsExposeWeaknessSP = "¡\\C[18]Las debilidades de Karryn han sido descubiertas\\C[0]!\nSu evasión, evasión crítica,\ny sus resistencias han disminuido.";
const StateTooltipsStunnedSP = "¡%1 sufre \\C[18]aturdimiento\\C[0]!\nSe saltará su turno.";
const StateTooltipsEnemyPoseMasterSP = "¡La postura sexual de Karryn puede reiniciarse tras la eyaculación de %1!";
const StateTooltipsActorAttackComboSP = "¡Karryn ha atacado \\C[2]%1 veces consecutivas\\C[0]!\nEl daño, precisión y coste de su próximo ataque será mayor.";
const StateTooltipsActorAttackComboCockySP = "¡Karryn ha atacado \\C[2]%1 veces consecutivas\\C[0]!\nEl daño, precisión y coste de su próximo ataque será mayor.\nAtacar cuatro o más veces consecutivas aumentará su \\C[30]arrogancia\\C[0].";
const StateTooltipsActorSexComboSP = "¡Karryn ha usado habilidades sexuales \\C[2]%1 veces consecutivas\\C[0]!\nEl daño de placer y el coste de su próxima habilidad sexual, que no sea de acariciar, será mayor.\nUsar de forma consecutiva la misma habilidad sexual (que no sea de acariciar) contra el mismo objetivo, aumentará mucho su daño de placer y coste.";
const StateTooltipsEnemyPosePussySexSP = "¡%1 se está follando el coño de Karryn!";
const StateTooltipsEnemyPoseCunnilingusSP = "¡%1 está comiéndole el coño a Karryn!";
const StateTooltipsEnemyPoseAnalSexSP = "¡%1 se está follando a Karryn por el culo!";
const StateTooltipsEnemyPosePaizuriSP = "¡%1 se está follando las tetas de Karryn!";
const StateTooltipsEnemyPoseHandjobSP = "¡Karryn le está haciendo una paja a %1!";
const StateTooltipsEnemyPoseBlowjobSP = "¡Karryn le está haciendo una mamada a %1!";
const StateTooltipsEnemyPoseFootjobSP = "¡Karryn le está haciendo una paja con los pies a %1!";
const StateTooltipsEnemyPoseRimjobSP = "¡Karryn le está comiendo el culo a %1!";
const StateTooltipsEnemyKissedSP = "¡%1 ha sido besado!\nSu ataque, precisión y evasión han disminuido.";
const StateTooltipsArousedSP = "¡Karryn está \\C[27]excitada\\C[0]!\nSu coño se irá \\C[23]mojando\\C[0] más cada turno.";
const StateTooltipsCautiousStanceSP = "La evasión y evasión crítica de Karryn han subido mucho.";
const StateTooltipsDefensiveStanceSP = "Karryn está protegida de varias desventajas.\nSu defensa, control de daño, resist. a las caricias,\ny resist. a perder ropa han subido mucho.";
const StateTooltipsCounterStanceSP = "La prob. de contraataque de Karryn ha subido mucho.\nSu número máximo de contraataques ha aumentado.\nSu control de daño ha subido un poco.";
const StateTooltipsSecretaryStanceSP = "La resistencia a los comentarios\nmiradas, caricias y sexo han subido mucho.\nEl daño de placer a los enemigos aumenta.";
const StateTooltipsLadyStanceSP = "La resistencia a las caricias y el sexo han subido un poco.\nEl encanto en combate ha subido";
const StateTooltipsPleasureStanceSP = "Karryn se deja llevar por el placer.♥";
const StateTooltipsWillpowerKiOneSP = "El ataque de Karryn ha aumentado.";
const StateTooltipsWillpowerKiTwoSP = "El ataque y daño crítico de Karryn han aumentado.";
const StateTooltipsWillpowerFocusOneSP = "La probabilidad de contraataque de Karryn ha aumentado.";
const StateTooltipsWillpowerFocusTwoSP = "La probabilidad de contraataque de Karryn y el control de daño han aumentado.";
const StateTooltipsWillpowerEyeOfTheMindOneSP = "La precisión, evasión y prob. de crítico de Karryn han aumentado.";
const StateTooltipsWillpowerEyeOfTheMindTwoSP = "La precisión, evasión, prob. de crítico\ny daño crítico de Karryn han aumentado.";
const StateTooltipsWillpowerSeeNoEvilSP = "La resistencia a las miradas ha aumentado.";
const StateTooltipsWillpowerHearNoEvilSP = "La resistencia a los comentarios ha aumentado.";
const StateTooltipsWillpowerRealityMarbleSP = "El encanto de Karryn en combate ha aumentado.";
const StateTooltipsWillpowerResistOrgasmSP = "¡Karryn intenta resistir un orgasmo!\nAumenta el umbral de placer requerido para tener un orgasmo.";
const StateTooltipsWillpowerEdgingControlKarrynSP = "¡Karryn intenta controlar el orgasmo de su próximo objetivo!\nAumenta el umbral de placer requerido\npara eyacular de su siguiente objetivo.";
const StateTooltipsWillpowerEdgingControlEnemySP = "¡Karryn no deja que %1 se corra!\nAumenta el umbral de placer requerido para eyacular.";
const StateTooltipsBonusPierceDamageSP = "%1 hará daño extra con \\C[4]ataques Perforantes\\C[0].";
const StateTooltipsBonusBluntDamageSP = "%1 hará daño extra con \\C[2]ataques Contundentes\\C[0].";
const StateTooltipsBonusSlashDamageSP = "%1 hará daño extra con \\C[3]ataques Cortantes\\C[0].";
const StateTooltipsEjaculationStunnedSP = "¡%1 está \\C[18]aturdido\\C[0]!\nSe saltará su turno.\nSu resistencias sexuales aumentan.\nSu evasión y evasión crítica se reducen.";
const StateTooltipsSlimeRegenNormalSP = "%1 regenerará 20% de resistencia por turno.";
const StateTooltipsSlimeRegenFourthSP = "%1 regenerará 5% de resistencia por turno.";
const StateTooltipsOrcDefensivePresenceSP = "La defensa de %1 ha aumentado.";
const StateTooltipsOrcCommandingPresenceOneSP = "El ataque, defensa y evasión de %1 han aumentado.";
const StateTooltipsOrcCommandingPresenceTwoSP = "La defensa y evasión de %1 han aumentado.";
const StateTooltipsOrcCommandingPresenceThreeSP = "El ataque de %1 ha aumentado.";
const StateTooltipsOrcCommandingPresenceFourSP = "El daño de placer de %1 ha aumentado.";
const StateTooltipsLizardmanRacialSP = "%1 está junto a otro hombre lagarto.\nSus estadísticas aumentan.";
const StateTooltipsLizardmanRacialWeakSP = "%1 está junto a otro hombre lagarto.\nSus estadísticas aumentan un poco.";
const StateTooltipsYetiHeatAuraSP = "El aura de calor de %1 provoca\nvarias desventajas a todos.";
const StateTooltipsYetiHeatAuraEnemyOneSP = "¡%1 sufre el \\C[18]calor del Yeti\\C[0]!\nHace menos daño sexual.";
const StateTooltipsYetiHeatAuraEnemyTwoSP = "¡%1 sufre el \\C[18]calor del Yeti\\C[0]!\nHace mucho menos daño sexual.";
const StateTooltipsYetiHeatAuraKarrynOneSP = "¡Karryn sufre el \\C[18]calor del Yeti\\C[0]!\nSu regeneración de resistencia se reduce mucho.";
const StateTooltipsYetiHeatAuraKarrynTwoSP = "¡Karryn sufre el \\C[18]calor del Yeti\\C[0]!\nSu regeneración de resistencia y voluntad\nse reducen mucho.";

const StateTooltipsYasuKiSP = "El daño de %1 ha subido.";
const StateTooltipsYasuFocusSP = "puede que %1 contraataque.";
const StateTooltipsYasuEyeoftheMindSP = "La precisión, prob. de crítico y daño crítico de %1 han subido.";
const StateTooltipsEnemyDefensiveStanceSP = "%1 está protegido de varias desventajas.\nSus defensas y control de daño han subido.";

const StateTooltipsKarrynClitToySP = "¡Karryn tiene un juguete en el clítoris!";
const StateTooltipsKarrynPussyToySP = "¡Karryn tiene un juguete en el coño!";
const StateTooltipsKarrynAnalToySP = "¡Karryn tiene un juguete insertado en el ano!";
const StateTooltipsEnemyClitToyPinkRotorSP = "¡%1 tiene un rotor rosa!";
const StateTooltipsEnemyPussyToyPenisDildoSP = "¡%1 tiene un consolador!";
const StateTooltipsEnemyAnalToyAnalBeadsSP = "¡%1 tiene bolas chinas!";
const StateTooltipsToiletPinkRotorSP = "Alguien se ha dejado un rotor rosa en el baño...";
const StateTooltipsToiletPenisDildoSP = "Alguien se ha dejado un consolador en el baño...";
const StateTooltipsToiletAnalBeadsSP = "Alguien se ha dejado bolas chinas en el baño....";
const StateWaitressNoAlcoholSP = "Karryn se niega a \\C[2]beber\\C[0].\nSe necesita %1 de Fuerza de Voluntad para rechazar bebidas.\nSe reducirá mucho la regeneración de voluntad tras rechazar una bebida.";
const StateWaitressDirtyMugsSingularSP = "%1 tiene una jarra sucia esperando ser recogida.";
const StateWaitressDirtyMugsPluralSP = "%1 tiene %2 jarras sucias esperando ser recogidas.";
const StateWaitressDirtyGlassesSingularSP = "%1 tiene un vaso sucio esperando ser recogido.";
const StateWaitressDirtyGlassesPluralSP = "%1 tiene %2 vasos sucios esperando ser recogidos.";
const StateWaitressAvailableMugsSingularSP = "Solo queda una jarra limpia.";
const StateWaitressAvailableMugsPluralSP = "Hay %1 jarras limpias disponibles.";
const StateWaitressAvailableGlassesSingularSP = "Solo queda un vaso limpio.";
const StateWaitressAvailableGlassesPluralSP = "Hay %1 vasos limpios disponibles.";
const StateWaitressKarrynLocationSP = "Karryn está en la %1.";
const StateWaitressTableALocationSP = "Karryn está en la Mesa A.";
const StateWaitressTableBLocationSP = "Karryn está en la Mesa B.";
const StateWaitressTableCLocationSP = "Karryn está en la Mesa C.";
const StateWaitressTableDLocationSP = "Karryn está en la Mesa D.";
const StateWaitressSleepingSP = "¡%1 se ha quedado dormido!\n¡Échalo del bar!";
const StateWaitressDrinkingDrinkSP = "%1 está bebiendo %2.";

const StateWaitressDrinkingNothingSP = "%1 no está bebiendo nada.";
const StateWaitressWantsDrinkSP = "%1 ha pedido %2.";

const StateReceptionistVisitorUnknownBeforeSP = "%1 no ha dicho el motivo de su visita todavía.";
const StateReceptionistVisitorUnknownAfterSP = "%1 está esperando la respuesta de Karryn.";
const StateReceptionistVisitorWritingBeforeSP = "%1 está sujetando unos papeles para rellenar.";
const StateReceptionistVisitorWritingDuringSP = "%1 está rellenando los papeles.";
const StateReceptionistVisitorWritingAfterSP = "%1 está sujetando los papeles que ha rellenado.";
const StateReceptionistVisitorPaperBeforeSP = "Las %2 páginas de papeleo de %1 necesitan ser procesadas.";
const StateReceptionistVisitorPaperAfterSP = "Las %2 páginas de papeleo de %1 están siendo procesadas.";
const StateReceptionistVisitorTimeSP = "El papeleo de %1 está listo.\nTiene %2 minutos de visita.";
const StateReceptionistVisitorMovingSP = "%1 está esperando.";
const StateReceptionistVisitorSittingSP = "%1 se sienta en su sitio.";
const StateReceptionistVisitorLineSP = "%1 está esperando en la cola del mostrador.";
const StateReceptionistVisitorDeskSP = "%1 está delante del mostrador.";

const StateStripperActorDanceComboSP = "Karryn ha usado sus habilidades de stripper \\C[2]%1 veces consecutivas\\C[0]!\nEl daño de placer y el coste de su próxima habilidad de stripper será mayor.";

const StateTrainerKarrynLocationSP = "Karryn está con %1.";

const DesireTooltipsMouthIntroSP = "El Deseo: Boca de Karryn representa su deseo\nde tener miembros masculinos en la boca\ny saborear sus distintos fluidos.";
const DesireTooltipsBoobsIntroSP = "El Deseo: Tetas de Karryn representa su deseo\nde que le toquen las tetas,\nde que le aprieten los pezones,\ny de tener cosas duras entre ellas.";
const DesireTooltipsPussyIntroSP = "El Deseo: Coño de Karryn representa su deseo\nde que jueguen con su clítoris y\nde tener objetos cada vez más grandes\nmetidos en el coño.";
const DesireTooltipsButtIntroSP = "El Deseo: Culo de Karryn representa su deseo\nde que le toquen su enorme trasero\ny de que le metan cosas por el culo.";
const DesireTooltipsCockIntroSP = "El Deseo: Polla de Karryn representa su deseo\nde saber todo lo posible sobre\nlas pollas, su aspecto, sonido,\nolor, sabor y tacto.";

const DesireTooltipsBodyDesireRequirementsUnknownSP = "\\I[40] 50    \\I[41]   Caricias Suaves\n\\I[40] 75    \\I[41]   Caricias Fuertes\n\\I[40]100   \\I[41]   Sexo\n(Requisitos por defecto)";
const DesireTooltipsCockDesireRequirementsUnknownSP = "\\I[40] 50    \\I[41]   Paja\n\\I[40] 65    \\I[41]   Servicio\n\\I[40] 85    \\I[41]   Penetración\n(Requisitos por defecto)";
const DesireTooltipsDesireRequirementsKnownSP = "Requisitos de Deseo";
const DesireTooltipsDesireRequirementsKnownFormatSP = "";


const DesireTooltipsMouthDesireDebuffOneSP = "\\I[56]\\C[2]La Precisión de Karryn empezará a bajar\n\\C[0]cuando tenga 50 o más Deseo: Boca\npor abrir la boca\npara gritar cuando vaya a atacar.";
const DesireTooltipsMouthDesireDebuffTwoSP = "\\I[56]\\C[2]El Daño Crítico de Karryn empezará a bajar\n\\C[0]cuando tenga 100 o más Deseo: Boca\npor lamerse los labios para satisfacer\nsu ansia de tener algo en la boca.";

const DesireTooltipsBoobsDesireDebuffOneSP = "\\I[56]\\C[2]La Evasión de Karryn empezará a bajar\n\\C[0]cuando tenga 50 o más Deseo: Tetas porque\nsus pezones piden atención\ny la distraen.";
const DesireTooltipsBoobsDesireDebuffTwoSP = "\\I[56]\\C[2]La Prob. de Crítico de Karryn empezará a bajar\n\\C[0]cuando tenga 100 o más Deseo: Tetas por la presión\nque le imponen sus pechos\ncomo si intentasen escapar.";

const DesireTooltipsPussyDesireDebuffOneSP = "\\I[56]\\C[2]La Resist. a Perder Ropa de Karryn empezará a bajar\n\\C[0]cuando tenga 50 o más Deseo: Coño por sentir\nlas palpitaciones de su coño.";
const DesireTooltipsPussyDesireDebuffTwoSP = "\\I[56]\\C[2]La Evasión Crítica de Karryn empezará a bajar\n\\C[0]cuando tenga 100 o más Deseo: Coño por resistir\nlas ganas de tocarse el coño ";

const DesireTooltipsButtDesireDebuffOneSP = "\\I[56]\\C[2]La Defensa de Karryn empezará a bajar\n\\C[0]cuando tenga 50 o más Deseo: Culo por\nrecolocar su postura para enseñar el culo.";
const DesireTooltipsButtDesireDebuffTwoSP = "\\I[56]\\C[2]La Resist. a las Caricias de Karryn empezará a bajar\n\\C[0]cuando tenga 100 o más Deseo: Culo por\nquerer que un hombre asalte su culo.";

const DesireTooltipsCockDesireDebuffOneSP = "\\I[56]\\C[2]El Ataque de Karryn empezará a bajar\n\\C[0]cuando tenga 50 o más Deseo: Polla\npor contenerse para no darles\nsin querer en la entrepierna.";
const DesireTooltipsCockDesireDebuffTwoSP = "\\I[56]\\C[2]La Resist. al Sexo de Karryn empezará a bajar\n\\C[0]cuando tenga 100 o más Deseo: Polla por los\npensamientos intrusivos que le piden polla.";

const DesireTooltipsMouthDesireTopBuffSP = "\\I[56]Cuando el Deseo: Boca es su deseo más alto,\n\\C[11]se reducirá la Defensa de sus enemigos\n\\C[0]por su boca seductora\ny los movimientos de su lengua.";
const DesireTooltipsBoobsDesireTopBuffSP = "\\I[56]Cuando el Deseo: Tetas es su deseo más alto,\n\\C[11]se reducirá la Evasión de sus enemigos\n\\C[0]porque no pueden parar de mirarle\nlas tetas con cada movimiento.";
const DesireTooltipsPussyDesireTopBuffSP = "\\I[56]Cuando el Deseo: Coño es su deseo más alto,\n\\C[11]los enemigos tienen más probabilidades\nde ponerse cachondos \\C[0]por las\nferomonas de su chochito.";
const DesireTooltipsButtDesireTopBuffSP = "\\I[56]Cuando el Deseo: Culo es su deseo más alto,\n\\C[11]se reducirá la Precisión de sus enemigos\n\\C[0]pues estarán demasiado centrador \nen su voluptuosa cadera.";
const DesireTooltipsCockDesireTopBuffSP = "\\I[56]Cuando el Deseo: Polla es su deseo más alto,\n\\C[27]aumentará la ganancia de Deseo: Polla\n\\C[0]porque no puede parar de pensar en pollas.";

const VirginityTextSP = "Estado de Virginidad";  //currently unused
const VirginityYesSP = "\\C[13]Virgen\\C[0]";
const VirginityNoSP = "\\C[27]No Virgen\\C[0]";
const VirginActorTextSP = "Primera vez con:"; //currently unused
const VirginActorNoneSP = "---------"; //currently unused

const ResistNameSP = " Resistencia a";
const SafeModeSP = "Modo Seguro"; //currently unused
const ReplayModeSP = "Modo Repetición"; //currently unused
const PixelMovementSP = "Movimiento de Pixeles"; //currently unused
const BattleLogSP = "Historial"; 
const BattleStatusSP = "Estado"; 
const EdictsSP = "Decretos";
const EdictCostSP = "Coste de Decreto";
const QuestLogSP = "Radio"; //currently unused
const GlossarySP = "Notas";//currently unused
const PassiveObtainedOnSP = "Obtenida el Día %1";
const StaminaRecoverySP = "\\C[11]¡%1 recupera %2 puntos de resistencia!";
const EnergyRecoverySP = "\\C[4]¡%1 recupera %2 puntos de energía!";

const KarrynTauntMessageSP = "¡Karryn comienza a provocar!";
const KarrynFlauntMessageSP = "Karryn empieza a alardear!";

const AronCallLizardmanFailSP = "¡Pero no apareció nadie...!";

const ActorGainPleasureSP = "\\C[27]¡El placer de %1 aumenta en %2!";
const ActorGainPleasure_SightSP = "\\C[27]¡El placer de %1 aumenta en %2 por ser observada!";
const ActorGainPleasure_ToySP = "\\C[27]¡El placer de %1 aumenta en %2 por los juguetes!";

const PleasurePercentTextSP = " porciento";

const EnemyGainPleasure_Percent_SP = "\\C[1]¡%1 está un %2 más cerca de eyacular!";
const EnemyGainPleasure_Value_SP = "\\C[1]¡El placer de %1 aumenta en %2!";
const ActorSingleOrgasmSP = "\\C[31]¡%1 pierde %2 puntos de energía!";
const ActorMultipleOrgasmSP = "\\C[1]¡%1 tiene %3 orgasmos consecutivos! \\C[31]¡%1 pierde %2 puntos de energía!";

const EjaculatePussySP = "\\C[27]¡%1 invade el útero de %2 con \\C[1]%3 ml de semen!";
const EjaculateAnalSP = "\\C[27]¡%1 llena el culo de %2 con \\C[1]%3 ml de semen!";
const EjaculateMouthSP = "\\C[27]¡%1 embadurna la garganta de %2 con \\C[1]%3 ml de semen!";

const BukkakeFaceSP = "\\C[27]¡%1 cubre la cara de %2 con \\C[1]%3 ml de semen!";
const BukkakeBoobsSP = "\\C[27]¡%1 se corre \\C[1]%3 ml de semen en las tetas de %2!";
const BukkakeArmsSP = "\\C[27]¡%1 se corre \\C[1]%3 ml de semen en los brazos de %2!";
const BukkakeLegsSP = "\\C[27]¡%1 se corre \\C[1]%3 ml de semen en las piernas de %2!";
const BukkakeButtSP = "\\C[27]¡%1 se corre \\C[1]%3 ml de semen en el culo de %2!";

const ActorFirstKissMouthSP = "\\C[18]¡¡¡Karryn ha dado su primer beso!!!";
const ActorFirstKissCockSP = "\\C[18]¡Oh no! ¡¡¡El primer beso de Karryn ha sido en la polla de alguien!!!";
const ActorFirstKissAnusSP = "\\C[18]¡Oh no! ¡¡¡El primer beso de Karryn ha sido en el ano de alguien!!!";
const ActorLostPussyVirginitySP = "\\C[18]¡¡¡¡El Himen de Karryn se ha roto!!!!";
const ActorLostAnalVirginitySP = "\\C[18]¡¡Karryn ha perdido su virginidad anal!!";

const InvasionNoiseLevelOneSP = "\\C[8]Se escuchan leves ruidos fuera.";
const InvasionNoiseLevelTwoSP = "\\C[7]Se escucha algo de movimiento fuera.";
const InvasionNoiseLevelThreeSP = "\\C[2]Se escucha algo de cháchara fuera.";
const InvasionNoiseLevelFourSP = "\\C[10]Alguien está gritando fuera.";
const InvasionBattleStartSP = "¡Un grupo de gente ha irrumpido en la habitación!";

const MasturbateBattleTouchClitSP = "¡Karryn empieza a frotarse el clítoris!";
const MasturbateBattleTouchPussySP = "¡Karryn empieza a frotarse el coño!";
const MasturbateBattleTouchAnalSP = "¡Karryn empieza a tocarse el ano!";
const MasturbateBattleTouchBoobsSP = "¡Karryn empieza a apretarse las tetas!";
const MasturbateBattleTouchNipplesSP = "¡Karryn empieza a pellizcarse los pezones!";

const MasturbateBattleFingerPussySP = "¡Karryn se mete los dedos por el coño!";
const MasturbateBattleFingerAnalSP = "¡Karryn se mete los dedos por el culo!";

const MasturbateBattleSuckFingersSP = "¡Karryn se chupa los dedos!";
const MasturbateBattleSuckNipplesSP = "¡Karryn se chupa los pezones!";

const SkillDescriptionNoValidTargetsSP = "No hay un objetivo válido.";
const SkillDescriptionNotEnoughDesireSP = "No tienes suficiente Deseo.";
const SkillDescriptionCantDoThisSP = "No puedes usar esta habilidad ahora.";
const SkillDescriptionHandsBusySP = "Necesitas una mano libre para esto.";
const SkillDescriptionNotWetSP = "No estás lo suficientemente mojada.";

const TitleDescriptionFirstTimeTitleEquipSP = "\\C[0] (Equípalo una vez para recibir los efectos toda la partida)";

const CharmEquipReqTextSP = "Requisito de Encanto: ";
const GrowthRateTextSP = " Crecimiento de";

const RemResultsVictorySP = "¡Victoria!";
const RemResultsDefeatSP = "Derrota...";
const RemResultsAbortedSP = "Combate Abortado.";
const RemResultsMasturbateBattleNoneSP = "Karryn está cansada...";
const RemResultsMasturbateBattleSingleSP = "¡Karryn se ha corrido!";
const RemResultsMasturbateBattlePluralSP = "¡Karryn se ha corrido %1 veces!";
const RemResultsJobBattleEndSP = "Karryn ha acabado la jornada.";
const RemResultsBitchEndBattleEndSP = "FINAL FELIZ";
const RemResultsEndlessBattleNormalSP = "Resultado Final: Oleada de Prisión Infinita %1";
const RemResultsEndlessBattleHellSP = "Resultado Final: Oleada de Batalla Infernal Infinita %1";
const RemResultsGainedExpSP = "EXP Ganada";
const RemResultsLevelUpSP = "¡SUBIDA DE NIVEL!";
const RemResultsOrderIncreaseSP = "\\I[408]\\C[11]¡Se ha restaurado %1 de Orden!";
const RemResultsOrderDecreaseSP = "\\I[409]\\C[10]Se ha perdido %1 de Orden...";
const RemResultsFundingIncreaseSP = "\\I[400]\\C[11]¡%1 de oro conseguidos!";
const RemResultsFundingDecreaseSP = "\\I[401]\\C[10]%1 de oro perdidos...";
const RemResultsFatigueIncreaseSP = "\\I[389]\\C[10]Fatiga aumentada en %1%...";
const RemResultsFatigueDecreaseSP = "\\I[388]\\C[11]Fatiga disminuida en %1%!";
const RemResultsItemDropSP = "\\I[96]\\C[11]¡Se ha obtenido un nuevo objeto %1!";

const CockinessIncreasedTextSP = "\\I[354]\\C[11]¡Arrogancia incrementada a %1%!";
const CockinessDecreasedTextSP = "\\I[489]\\C[10]Arrogancia reducida a %1%...";
const CockinessResetSP = "\\I[489]\\C[10]Arrogancia reducida a cero...";
const CockinessMaxxedOutSP = "\\I[354]\\C[11]¡Arrogancia al 100%!";

const RemResultsSubduedWithAttackSP = "\\I[74]\\C[11]¡Subyugadas %1 %2 por la fuerza!";
const RemResultsSubduedSexuallySP = "\\I[43]\\C[27]¡Subyugadas %1 %2 sexualmente!";
const RemResultsSubduedWithAttackAndSexuallySP = "\\I[291]\\C[11]¡Subyugadas %1 %2 por la fuerza y \\C[27]%3 %4 sexualmente\\C[11]!";
const RemResultsKarrynOrgasmSingularSP = "\\I[99]\\C[27]¡Se ha corrido una vez!";
const RemResultsKarrynOrgasmPluralSP = "\\I[99]\\C[27]¡Se ha corrido %1 veces!";
const RemResultsKarrynMasturbatedInBattleSingularSP = "\\I[46]\\C[27]¡Se ha masturbado una vez durante el combate!";
const RemResultsKarrynMasturbatedInBattlePluralSP = "\\I[46]\\C[27]¡Se ha masturbado %1 veces durante el combate!";
const RemResultsKarrynKissSP = "\\I[288]\\C[27]¡Ha besado %1 %2!";
const RemResultsKarrynHandjobSP = "\\I[289]\\C[27]¡Ha pajeado a %1 %2!";
const RemResultsKarrynBlowjobSP = "\\I[294]\\C[27]¡Se la ha chupado a %1 %2!";
const RemResultsKarrynTitjobSP = "\\I[221]\\C[27]¡Le ha hecho pajas con las tetas a %1 %2!";
const RemResultsKarrynFootjobSP = "\\I[219]\\C[27]¡Le ha hecho pajas con los pies a %1 %2!";
const RemResultsKarrynRimjobSP = "\\I[299]\\C[27]¡Le ha comido el culo a %1 %2!";
const RemResultsKarrynVaginalSexSP = "\\I[295]\\C[27]¡Ha tenido sexo vaginal con %1 %2!";
const RemResultsKarrynAnalSexSP = "\\I[296]\\C[27]¡Ha tenido sexo anal con %1 %2!";


const RemParamLevelGainedSingularSP = "\\C[16]%3¡%1 nivel de %2 ganado!";
const RemParamLevelGainedPluralSP = "\\C[16]¡¡%1 niveles de %2 ganados!!";

const RemWardenLevelRequireSingularSP = "\\C[8]\\I[25]¡%1 nivel más hasta el siguiente Nivel de Directora!";
const RemWardenLevelRequirePluralSP = "\\C[8]\\I[25]¡%1 niveles más hasta el siguiente Nivel de Directora!";
const RemWardenLevelUpSP = "\\I[352]\\C[11]¡¡¡SUBE DE NIVEL!!! \\C[16]¡¡%1 ha alcanzado el nivel %2 de Directora!!";
const RemWardenLevelLimitReachedSP = "\\I[353]\\C[8]%1 ha alcanzado el límite de Nivel de Directora y no ganará más Estadísticas.";

const RemResultsPassivesTitleSP = "¡¡Nuevas Pasivas Desbloqueadas!!";
const RemResultsTooManyPassivesUnlockedSP = "\\C[8]\\I[25]¡Y %1 Pasivas más!";

const RemDailyReportDayCountSP = "\\#\\{\\{Día %1: Informe Diario\\}\\}";
const RemDailyReportAnarchyNoLimitSP = "\\I[377]Día %2 de \\C[7]Anarquía\\C[0] en el Nivel %1.";
const RemDailyReportAnarchyLimitBefore_singularSP = "\\I[377]Día %2 de \\C[7]Anarquía\\C[0] en el Nivel %1. ¡El Control puede empezar a bajar más a desde mañana!";
const RemDailyReportAnarchyLimitBefore_pluralSP = "\\I[377]Día %2 de \\C[7]Anarquía\\C[0] en el Nivel %1. ¡El Control puede empezar a bajar más en %3 días!";
const RemDailyReportAnarchyPastLimitSP = "\\I[377]Día %2 de Anarquía. El Control se reduce un \\C[18]-%3\\C[0] por el descontrol!";
const RemDailyReportRiot_NewSP = "\\I[407]¡¡El nivel %1 ha iniciado un \\C[18]MOTÍN\\C[0]!! ¡El Orden se ha reducido en un \\C[18]-%2\\C[0]!";
const RemDailyReportRiot_OldSP = "\\I[407]¡¡El \\C[18]MOTÍN\\C[0] del nivel %1 ha durado ya %2 días! ¡El Orden se ha reducido en un \\C[18]-%3\\C[0]!";
const RemDailyReportOrderChange_PositiveSP = "\\I[408]El Orden ha subido hasta un %1.";
const RemDailyReportOrderChange_NegativeSP = "\\I[409]El Orden ha caído hasta un %1.";
const RemDailyReportOrderChange_NeutralSP = "\\I[408]El Orden se ha mantenido en %1.";
const RemDailyReportFundingChange_PositiveSP = "\\I[410]Los Ingresos han subido a \\C[11]$%1\\C[0].";
const RemDailyReportFundingChange_NegativeSP = "\\I[411]Los Ingresos han bajado a \\C[2]$%1\\C[0].";
const RemDailyReportBankruptcySP = "\\I[411]¡¡¡La prisión está en \\C[2]BANCARROTA\\C[0]!!! ¡El Control se ha reducido en un \\C[18]-%1\\C[0]!";
const RemDailyReportEdictPoints_SingularSP = "\\I[364]%1 Punto de Decreto disponible hoy.";
const RemDailyReportEdictPoints_PluralSP = "\\I[364]%1 Puntos de Decreto disponibles hoy.";
const RemDailyReportBarRep_AlmostDecaySP = "\\I[188]La Reputación del Bar va a \\C[8]caer\\C[0]. Trabaja de Camarera para evitarlo.";
const RemDailyReportBarRep_DecayedSP = "\\I[188]\\C[8]La Reputación del Bar ha caído un -1.\\C[0]";
const RemDailyReportVisitorRep_AlmostDecaySP = "\\I[159]La Reputación del Centro de Visitantes va a \\C[8]caer\\C[0]. Trabaja de Recepcionista para evitarlo.";
const RemDailyReportVisitorRep_DecayedSP = "\\I[159]\\C[8]La Reputación del Centro de Visitantes ha caído un -1.\\C[0]";
const RemDailyReportToiletRep_AlmostDecaySP = "\\I[234]La Reputación del Baño va a \\C[8]caer\\C[0]. Descansa en el Baño para evitarlo.";
const RemDailyReportToiletRep_DecayedSP = "\\I[234]\\C[8]La Reputación del Baño ha caído un -1.\\C[0]";
const RemDailyReportStripClubRep_AlmostDecaySP = "\\I[21]La Reputación del Club de Striptease va a \\C[8]caer\\C[0]. Trabaja de Stripper para evitarlo.";
const RemDailyReportStripClubRep_DecayedSP = "\\I[21]\\C[8]La Reputación del Club de Striptease ha caído un -1.\\C[0]";
const RemDailyReportGymRep_AlmostDecaySP = "\\I[159]La Reputación del Gimnasio va a \\C[8]caer\\C[0]. Trabaja de Entrenadora para evitarlo.";
const RemDailyReportGymRep_DecayedSP = "\\I[159]\\C[8]La Reputación del Gimnasio ha caído un -1.\\C[0]";

const RemParamGainedStrengthSP = "Strength increased by %1!"; //unused
const RemParamGainedStaminaSP = "Stamina increased by %1!"; //unused
const RemParamGainedEnergySP = "Energy increased by %1!"; //unused
const RemParamGainedDexteritySP = "Dexterity increased by %1!"; //unused
const RemParamGainedAgilitySP = "Agility increased by %1!"; //unused
const RemParamGainedEnduranceSP = "Endurance increased by %1!"; //unused
const RemParamGainedMindSP = "Mind increased by %1!"; //unused
const RemParamGainedCharmSP = "Charm increased by %1!"; //unused

const RemExpEnemiesDefeatedSP = "Enemies Defeated EXP"; //currently unused
const RemExpHalberdCombatSP = "Halberd Combat EXP"; //currently unused
const RemExpUnarmedCombatSP = "Unarmed Combat EXP"; //currently unused
const RemExpEvasionCombatSP = "Evasion EXP"; //currently unused
const RemExpWillpowerCombatSP = "Willpower EXP"; //currently unused
const RemExpEnduranceCombatSP = "Endurance EXP"; //currently unused
const RemExpTalkSensitivitySP = "Talk Sensitivity EXP"; //currently unused
const RemExpSightSensitivitySP = "Sight Sensitivity EXP"; //currently unused
const RemExpFingerSensitivitySP = "Finger Sensitivity EXP"; //currently unused
const RemExpMouthSensitivitySP = "Mouth Sensitivity EXP"; //currently unused
const RemExpBoobsSensitivitySP = "Boobs Sensitivity EXP"; //currently unused
const RemExpPussySensitivitySP = "Pussy Sensitivity EXP"; //currently unused
const RemExpButtSensitivitySP = "Butt Sensitivity EXP"; //currently unused
const RemExpCreampieSensitivitySP = "Creampie Recipient EXP"; //currently unused
const RemExpBukkakeSensitivitySP = "Bukkake EXP"; //currently unused
const RemExpSwallowSensitivitySP = "Swallowing EXP"; //currently unused
const RemExpKissSkillSP = "Kissing EXP"; //currently unused
const RemExpPettingSkillSP = "Petting EXP"; //currently unused
const RemExpHandjobSkillSP = "Handjob EXP"; //currently unused
const RemExpBlowjobSkillSP = "Blowjob EXP"; //currently unused
const RemExpTittyFuckSkillSP = "Titjob EXP"; //currently unused
const RemExpPussySexSkillSP = "Vaginal Sex EXP"; //currently unused
const RemExpAnalSexSkillSP = "Anal Sex EXP"; //currently unused
const RemExpMasturbateSkillSP = "Masturbation EXP"; //currently unused
const RemExpOrgasmSpecialSP = "Orgasm EXP"; //currently unused
const RemExpStrippedSpecialSP = "Stripped EXP"; //currently unused
const RemExpDoublePenetrationSpecialSP = "Double Penetration EXP"; //currently unused
const RemExpTriplePenetrationSpecialSP = "Triple Penetration EXP"; //currently unused


const RemYanflyBattleCoreUserSP = "Usuario";
const RemYanflyBattleCoreAllySP = "Aliado";
const RemYanflyBattleCoreAlliesSP = "Aliados";
const RemYanflyBattleCoreEnemySP = "Enemigo";
const RemYanflyBattleCoreEnemiesSP = "Enemigos";
const RemYanflyBattleCoreAllTargetsSP = "Todos los %1";
const RemYanflyBattleCoreRandomTargetsSP = "%2 %1 Aleatorios";

const RemYanflyRemoveSP = "Eliminar";
const RemYanflyEmptySP = "<Vacío>";

//Options Main
const RemYanflyOptions_All_SP = "\\I[272]Todo";
const RemYanflyOptions_All_Help_SP = "Una lista de todas las opciones del juego.";
const RemYanflyOptions_General_SP = "\\I[273]General";
const RemYanflyOptions_General_Help_SP = "Opciones generales que alteran el funcionamiento del juego.";
const RemYanflyOptions_Audio_SP = "\\I[274]Audio";
const RemYanflyOptions_Audio_Help_SP = "Ajusta las opciones de audio del juego.";
const RemYanflyOptions_Visual_SP = "\\I[276]Gráficos";
const RemYanflyOptions_Visual_Help_SP = "Opciones que ajustan las propiedades gráficas del juego.";
const RemYanflyOptions_Controls_SP = "\\I[280]Controles";
const RemYanflyOptions_Controls_Help_SP = "Cambia los controles del juego.\nPulsa un botón en tu mando para acceder a las opciones de Configuración de Mando.";
const RemYanflyOptions_Cheats_SP = "\\I[250]Trucos";
const RemYanflyOptions_Cheats_Help_SP = "Los trucos solo se activan en el Modo Secretaria.\nÚsalos si te gusta jugar en el Modo Secretaria\npero quieres que ciertos aspectos del juego sean más difíciles.";
const RemYanflyOptions_Exit_SP = "\\I[254]Salir";
const RemYanflyOptions_Exit_Help_SP = "Salir del Menú de Opciones.";


const RemYanflyOptions_Hair_SP = "\\I[586]Cosméticos";
const RemYanflyOptions_Hair_Help_SP = "Modifica la apariencia de Karryn.\nAlgunas opciones requieren el DLC Stray Pubes.";

const RemYanflyOptions_Lovense_SP = "\\I[587]Lovense";
const RemYanflyOptions_Lovense_Help_SP = "Opciones de la integración de juguetes Lovense.\n¡Por favor, practique una buena higiene cuando uses juguetes sexuales!\nLa tecla ALT es un botón de PARADA de emergencia para los juguetes Lovense.";

//Options General
const RemYanflyOptions_Language_SP = "\\i[275]Idioma del Texto";
const RemYanflyOptions_Language_Help_SP = "Cambia aquí el idioma del texto.";
const RemYanflyOptions_VoiceLanguage_SP = "\\i[275]Idioma de las Voces";
const RemYanflyOptions_VoiceLanguage_Help_SP = "Cambia aquí el idioma de las voces.";
const RemYanflyOptions_AlwaysDash_SP = "\\i[273]Correr Siempre";
const RemYanflyOptions_AlwaysDash_Help_SP = "Karryn andará por defecto si esto está DESACTIVADO.\nKarryn correrá por defecto si esto está ACTIVADO.\nMantener SHIFT alternará entre andar y correr.";
const RemYanflyOptions_MessageSpeed_SP = "\\i[273]Velocidad de los Mensajes";
const RemYanflyOptions_MessageSpeed_Help_SP = "Cambia la velocidad a la que sale el texto en los mensajes.";
const RemYanflyOptions_MessageSpeed_NoWait_SP = "Sin Espera";
const RemYanflyOptions_CommandRemember_SP = "\\i[273]Recordar Comandos";
const RemYanflyOptions_CommandRemember_Help_SP = "El juego recordará las últimas habilidades usadas en cada fase del combate.";

const RemYanflyOptions_Battlelog_Duration_SP = "\\i[273]Duración del registro de combate";
const RemYanflyOptions_Battlelog_Duration_Help_SP = "Cambia la duración en pantalla de los mensajes del registro de combate.";
const RemYanflyOptions_Battlelog_Duration_Zero_SP = "Muy Poco";
const RemYanflyOptions_Battlelog_Duration_One_SP = "Poco";
const RemYanflyOptions_Battlelog_Duration_Two_SP = "Por Defecto";
const RemYanflyOptions_Battlelog_Duration_Three_SP = "Mucho";
const RemYanflyOptions_Battlelog_Duration_Four_SP = "Muchísimo";

const RemYanflyOptions_Battlelog_Fontsize_SP = "\\i[273]Tamaño de Fuente del registro de combate";
const RemYanflyOptions_Battlelog_Fontsize_Help_SP = "Cambia el tamaño de la fuente del registro de combate.";
const RemYanflyOptions_Battlelog_Fontsize_Zero_SP = "Muy Pequeña";
const RemYanflyOptions_Battlelog_Fontsize_One_SP = "Más Pequeña";
const RemYanflyOptions_Battlelog_Fontsize_Two_SP = "Por Defecto";
const RemYanflyOptions_Battlelog_Fontsize_Three_SP = "Más Grande";
const RemYanflyOptions_Battlelog_Fontsize_Four_SP = "Muy Grande";

const RemYanflyOptions_MaleDialogueAppear_SP = "\\i[273]Diálogos en Combate";
const RemYanflyOptions_MaleDialogueAppear_Help_SP = "Cambia la frecuencia de los comentarios de los enemigos al usar habilidades sexuales.\nNota: Hay excepciones donde los enemigos hablarán sin importar esta opción.";
const RemYanflyOptions_MaleDialogueAppear_Zero_SP = "Silencio";
const RemYanflyOptions_MaleDialogueAppear_One_SP = "Casi nunca";
const RemYanflyOptions_MaleDialogueAppear_Two_SP = "A veces";
const RemYanflyOptions_MaleDialogueAppear_Three_SP = "Con frecuencia (Por Defecto)";
const RemYanflyOptions_MaleDialogueAppear_Four_SP = "Habladores";

const RemYanflyOptions_KarrynLinesPrompt_SP = "\\i[273]Pausa en Diálogos de Karryn";
const RemYanflyOptions_KarrynLinesPrompt_Help_SP = "El combate se para cuando Karryn habla hasta que se pulse la tecla confirmar.\nDesactivar esta opción se saltará la pausa de la mayoría de Diálogos en combate de Karryn.";
const RemYanflyOptions_Disable_Rimjobs_SP = "\\i[273]Desactivar Anilingus";
const RemYanflyOptions_Disable_Rimjobs_Help_SP = "Desactiva el contenido de Anilingus al Activar.\nEl contenido y la progresión de este juego están diseñados para que haya Anilingus.\nActiva esto solo si este contenido te hace no querer jugar.";
const RemYanflyOptions_Disable_Footjobs_SP = "\\i[273]Desactivar Pajas con los Pies";
const RemYanflyOptions_Disable_Footjobs_Help_SP = "Desactiva el contenido de Pajas con los pies al Activar.\nEl contenido y la progresión de este juego están diseñados para que haya Pajas con los Pies.\nActiva esto solo si este contenido te hace no querer jugar.";
const RemYanflyOptions_Disable_Smegma_SP = "\\i[273]Desactivar Smegma";
const RemYanflyOptions_Disable_Smegma_Help_SP = "Desactiva cualquier mención al smegma en los diálogos de combate.\nAunque esto no afecta a la jugabilidad, reduce la variedad de diálogos.\nActiva esto solo si este contenido te hace no querer jugar.";
const RemYanflyOptions_Disable_FeraMouth_SP = "\\i[273]Desactivar Bocas Exageradas al hacer Mamadas";
const RemYanflyOptions_Disable_FeraMouth_Help_SP = "Desactiva las expresiones exageradas al hacer mamadas.\nAunque esto no afecta a la jugabilidad, reduce la variedad de expresiones faciales al hacer mamadas.\nActiva esto solo si este contenido te hace no querer jugar.";

const RemYanflyOptions_DisplayPleasureAsPercent_SP = "\\i[273]Mostrar Placer como un Porcentaje";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_SP = "Cuando esto está ACTIVADO, los valores de placer se mostrarán como un porcentaje basado en \nla cantidad de placer para tener un orgasmo.\nCuando está DESACTIVADO, los valores de placer se mostrarán como números.";

const RemYanflyOptions_ShorterDefeatBattles_SP = "\\i[273]Batallas de Derrota Más Cortas";
const RemYanflyOptions_ShorterDefeatBattles_Help_SP = "\\}Las Batallas de Derrota (Las que salen tras perder Karryn) acaban cuando todos los enemigos están satisfechos.\n\\{Al ACTIVAR, acabarán cuando Karryn esté agotada.\nEl Modo Prisionera ignora esta opción, está siempre desactivada."

//Options Audio
const RemYanflyOptions_MasterVolume_SP = "\\i[274]Volumen Maestro";
const RemYanflyOptions_MasterVolume_Help_SP = "Ajusta el volumen general del juego.";
const RemYanflyOptions_BGMVolume_SP = "\\i[274]Volumen de la Música";
const RemYanflyOptions_BGMVolume_Help_SP = "Ajusta el volumen de la música.";
const RemYanflyOptions_BGSVolume_SP = "\\i[274]Volumen de Efectos de Sonido de Fondo";
const RemYanflyOptions_BGSVolume_Help_SP = "Ajusta el volumen de los efectos de sonido de fondo.";
const RemYanflyOptions_MEVolume_SP = "\\i[274]Volumen de Efectos Musicales";
const RemYanflyOptions_MEVolume_Help_SP = "Ajusta el volumen de los efectos músicales como las fanfarrias.";
const RemYanflyOptions_SEVolume_SP = "\\i[274]Volumen de Sonidos";
const RemYanflyOptions_SEVolume_Help_SP = "Ajusta el volumen de los efectos de sonido.";
const RemYanflyOptions_VoiceVolume_SP = "\\i[274]Volumen de las Voces";
const RemYanflyOptions_VoiceVolume_Help_SP = "Ajusta el volumen de los diálogos hablados de Karryn.";
const RemYanflyOptions_MoansVolume_SP = "\\i[274]Volumen de los Gemidos";
const RemYanflyOptions_MoansVolume_Help_SP = "Ajusta el volumen de los gemidos de Karryn.";
const RemYanflyOptions_MaleVolume_SP = "\\i[274]Volumen de los Hombres";
const RemYanflyOptions_MaleVolume_Help_SP = "Ajusta el volumen de gruñidos y risas de los Hombres.";
const RemYanflyOptions_KeepVoicePlayback_SP = "\\i[274]Mantener Reproducción de las Voces";
const RemYanflyOptions_KeepVoicePlayback_Help_SP = "Normalmente cualquier frase deja de sonar cuando pulsas el botón confirmar.\nActivar esta opción hará que la frase suene hasta que se reproduza una nueva frase."
const RemYanflyOptions_AutoContinueAfterVoice_SP = "\\i[274]Auto Continuar Tras Frase";
const RemYanflyOptions_AutoContinueAfterVoice_Help_SP = "Activar esta opción continuará la batalla en cuanto la frase de Karryn acabe.\nRequiere que la opción 'Pausa en Diálogos de Karryn' esté activada."

//Options Visual
const RemYanflyOptions_WindowToneRed_SP = "\\i[277]Tono de Ventana: Rojo";
const RemYanflyOptions_WindowToneRed_Help_SP = "Cambia el valor del tono de \\c[18]rojo\\c[0].\nMantén SHIFT mientras pulsas IZQUIERDA/DERECHA para ajustar mejor.\nNota: Esta opción solo afecta al archivo de guardado actual, no se puede modificar en la pantalla del título.";
const RemYanflyOptions_WindowToneGreen_SP = "\\i[278]Tono de Ventana: Verde";
const RemYanflyOptions_WindowToneGreen_Help_SP = "Cambia el valor del tono de \\c[29]verde\\c[0].\nMantén SHIFT mientras pulsas IZQUIERDA/DERECHA para ajustar mejor.\nNota: Esta opción solo afecta al archivo de guardado actual, no se puede modificar en la pantalla del título.";
const RemYanflyOptions_WindowToneBlue_SP = "\\i[279]Tono de Ventana: Azul";
const RemYanflyOptions_WindowToneBlue_Help_SP = "Cambia el valor del tono de \\c[14]azul\\c[0].\nMantén SHIFT mientras pulsas IZQUIERDA/DERECHA para ajustar mejor.\nNota: Esta opción solo afecta al archivo de guardado actual, no se puede modificar en la pantalla del título.";
const RemYanflyOptions_FasterBattleDialogue_SP = "\\i[276]Diálogos de Combate Rápidos";
const RemYanflyOptions_FasterBattleDialogue_Help_SP = "Activar esta opción hará que los diálogos de los combates vayan más rápido.";
const RemYanflyOptions_FasterBattleCutins_SP = "\\i[276]'Cortes' Simples de Combate'";
const RemYanflyOptions_FasterBattleCutins_Help_SP = "Activar esta opción hará que los 'cortes' en los combates vayan más rápido y sin animación.\nActívala si se te ralentiza el juego durante los 'cortes'.";
const RemYanflyOptions_SmootherBattleCutinLoading_SP = "\\i[276]Carga Fluida de 'Cortes' de Combate";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_SP = "\\}\\}Opción para PCs potentes. Los 'cortes' en combate serán más fluidos pero habrá mayor tiempo de carga al iniciar el juego.\n\\{\\{Desactiva esta opción si el juego te tarda más de 20 segundos en iniciarse o si tu juego se cuelga.\nPorfavor, reinicia el juego para que esta opción tenga efecto.";
const RemYanflyOptions_DisableBattleCutins_SP = "\\i[276]Desactivar 'Cortes' de Combate";
const RemYanflyOptions_DisableBattleCutins_Help_SP = "Activar esta opción desactivará los 'cortes' de combate.\nLa experiencia visual prevista es disfrutar del juego con sus 'cortes' de combate.\nEsta opción es un último recurso si realmente los 'cortes' de combate te dan problemas de FPS.";
const RemYanflyOptions_SmootherCGLoading_SP = "\\i[276]Carga Fluida de CG";
const RemYanflyOptions_SmootherCGLoading_Help_SP = "\\}\\}Opción para PCs potentes. Las CGs serán más fluidas pero habrá mayor tiempo de carga al iniciar el juego.\nDesactiva esta opción si el juego te tarda más de 20 segundos en iniciarse o si tu juego se cuelga.\n\\{Porfavor, reinicia el juego para que esta opción tenga efecto.";
const RemYanflyOptions_SortPassivesAscending_SP = "\\i[276]Ordenar Pasivas de Forma Ascendente";
const RemYanflyOptions_SortPassivesAscending_Help_SP = "Las pasivas aparece ordenadas por el orden en el que se desbloquearon.\nACTIVADO: Las más antiguas aparecerán arriba.\nDESACTIVADO: Las más nuevas aparecerán arriba.";
const RemYanflyOptions_SynchFPS_SP = "\\i[273]Forzar 60 FPS";
const RemYanflyOptions_SynchFPS_Help_SP = "\\}Activa esta opción si tu monitor tiene una tasa de refresco superior a 60hz.\n\\{Desactívala si el juego va a menos de 60 FPS o tu monitor es de 60hz o menos.\nSi pulsas F2 podrás ver los FPS del juego.";
const RemYanflyOptions_LightingEffects_SP = "\\i[276]Efectos de Iluminación del Mapa";
const RemYanflyOptions_LightingEffects_Help_SP = "Los efectos de iluminación del mapa incluyen las de fuentes de luz como antorchas.\nAl desactivar esta opción perferás los efectos y mejorará el rendimiento si\nexperimentas ralentizaciones en zonas con muchos efectos de iluminación." 
const RemYanflyOptions_MapEffects_SP = "\\i[276]Efectos Animados del Mapa";
const RemYanflyOptions_MapEffects_Help_SP = "Efectos como por ejemplo, la bruma.\nAl desactivar esta opción perferás los efectos y mejorará el rendimiento si\nexperimentas ralentizaciones en zonas con muchos efectos animados." 
const RemYanflyOptions_DisableFlashing_SP = "\\i[276]Desactivar Flashes";
const RemYanflyOptions_DisableFlashing_Help_SP = "Activar esta opción desactivará los flashes.\nÚsala si eres sensible a ellos o te molestan los ojos." 

const RemYanflyOptions_ShowSexualDamagePopup_SP = "\\i[276]Números de Daño Sexual";
const RemYanflyOptions_ShowSexualDamagePopup_Help_SP = "\\}Activa esta opción para ver números de daño de ataques sexuales por encima de Karryn.\nDesactívala para no ver estos números.\nLa información de los ataques sexuales seguirá apareciendo en el registro de combate.";

const RemYanflyOptions_EdictsOutlineColor_Obtainable_SP = "\\i[276]Color del Borde de Decretos: Obtenible";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_SP = "Está opción cambia el color de los bordes en la pantalla de decretos\na los decretos que Karryn puede promulgar en ese momento.";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_SP = "\\i[276]Color del Borde de Decretos: Req. Cumplidos";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_SP = "Está opción cambia el color de los bordes en la pantalla de decretos\na los decretos cuyos requisitos se cumplen pero no se pueden promulgar ahora.";
const RemYanflyOptions_EdictsOutlineColor_NoReq_SP = "\\i[276]Color del Borde de Decretos: Req. Incumplidos";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_SP = "Está opción cambia el color de los bordes en la pantalla de decretos\na los decretos cuyos requisitos no se cumplen.";

const RemYanflyOptions_EdictsOutlineColorName_Green_SP = "Verde";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_SP = "Azul Claro";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_SP = "Amarillo";
const RemYanflyOptions_EdictsOutlineColorName_Purple_SP = "Púrpura";
const RemYanflyOptions_EdictsOutlineColorName_Gray_SP = "Gris";
const RemYanflyOptions_EdictsOutlineColorName_Black_SP = "Negro";
const RemYanflyOptions_EdictsOutlineColorName_Red_SP = "Rojo";

//Options Controls
const RemYanflyOptions_GamepadControl_SP = "\\i[281]Configuración de Mando";
const RemYanflyOptions_GamepadControl_Help_SP = "Configura los Botones del Mando.";
const RemYanflyOptions_KeyboardControl_SP = "\\i[280]Configuración de Teclado";
const RemYanflyOptions_KeyboardControl_Help_SP = "Configura las teclas del teclado.";
const RemYanflyOptions_CancelSkipMentalPhase_SP = "\\I[280]Cancelar se Salta la Fase Mental";
const RemYanflyOptions_CancelSkipMentalPhase_Help_SP = "Activar esta opción hará que se salte la fase mental \nal pulsar cancelar o hacer click derecho con el ratón.";

const RemYanflyOptions_Fullscreen_SP = "\\i[273]Activar Pantalla Completa";
const RemYanflyOptions_Fullscreen_Help_SP = "Cambia entre Modo Ventana y Pantalla Completa.\nPulsar F4 o ALT+ENTER mientras juegas hace lo mismo.";

const RemYanflyGamepadButtonNameSP = "Botón %1";
const RemYanflyGamepadOkButtonNameSP = "OK / Interactuar";
const RemYanflyGamepadOkButtonHelpSP = "Comando para aceptar acciones o interactuar con personas y objetos.";
const RemYanflyGamepadCancelButtonNameSP = "Cancelar";
const RemYanflyGamepadCancelButtonHelpSP = "Usado para cancelar acciones en los menús.";
const RemYanflyGamepadShiftButtonNameSP = "Shift";
const RemYanflyGamepadShiftButtonHelpSP = "Mantén pulsado esté botón para correr o para ocultar texto.";
const RemYanflyGamepadMenuButtonNameSP = "Menú";
const RemYanflyGamepadMenuButtonHelpSP = "Usado para abrir el Menú Principal.";
const RemYanflyGamepadPageUpButtonNameSP = "Gatillo Izquierdo / Registro";
const RemYanflyGamepadPageUpButtonHelpSP = "Usado para navegar por menús y objetos, y abrir el registro de mensajes.";
const RemYanflyGamepadPageDownButtonNameSP = "Gatillo Derecho / Acelerar";
const RemYanflyGamepadPageDownButtonHelpSP = "Usado para navegar por menús y objetos, y para acelerar textos y combates.";
const RemYanflyGamepadResetDefaultNameSP = "Reiniciar a Opciones Por Defecto";
const RemYanflyGamepadResetDefaultHelpSP = "Vuelve a poner las acciones por defecto.";
const RemYanflyGamepadFinishConfigNameSP = "Terminar Configuración";
const RemYanflyGamepadFinishConfigHelpSP = "¿Has acabado de configurar el mando?";

const RemYanflyKeyboardHelpSP = "¿Cambiar la configuración de esta tecla?";
const RemYanflyKeyboardDefaultLayoutTextSP = "Disposición de Teclado Por Defecto";
const RemYanflyKeyboardDefaultLayoutHelpSP = "Revierte tu configuración del teclado a la Por Defecto.";
const RemYanflyKeyboardWASDTextSP = "Movimiento con WASD";
const RemYanflyKeyboardWASDHelpSP = "Cambia el movimiento a las teclas WASD.";
const RemYanflyKeyboardFinishConfigTextSP = "Finalizar Configuración";
const RemYanflyKeyboardFinishConfigHelpSP = "¿Has terminado de configurar el teclado?";
const RemYanflyKeyboardClearTextSP = "Quitar";
const RemYanflyKeyboardOKKeySP = "OK";
const RemYanflyKeyboardOKTextSP = "OK / Interactuar";
const RemYanflyKeyboardEscapeKeySP = "Cancelar/Menú";
const RemYanflyKeyboardEscapeTextSP = "Cancelar / Menú";
const RemYanflyKeyboardCancelKeySP = "Cancelar";
const RemYanflyKeyboardCancelTextSP = "Cancelar";
const RemYanflyKeyboardMenuKeySP = "Menú";
const RemYanflyKeyboardMenuTextSP = "Menú";
const RemYanflyKeyboardShiftKeySP = "Shift";
const RemYanflyKeyboardShiftTextSP = "Shift";
const RemYanflyKeyboardPageUpKeySP = "PgUp";
const RemYanflyKeyboardPageUpTextSP = "Page Up / Registro";
const RemYanflyKeyboardPageDownKeySP = "PgDn";
const RemYanflyKeyboardPageDownTextSP = "Page Down";
const RemYanflyKeyboardLeftKeySP = "←";
const RemYanflyKeyboardLeftTextSP = "Izquierda";
const RemYanflyKeyboardUpKeySP = "↑";
const RemYanflyKeyboardUpTextSP = "Arriba";
const RemYanflyKeyboardRightKeySP = "→";
const RemYanflyKeyboardRightTextSP = "Derecha";
const RemYanflyKeyboardDownKeySP = "↓";
const RemYanflyKeyboardDownTextSP = "Abajo";


//Options Cheats
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_SP = "\\i[56]\\C[27]Hot Coffee";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_SP = "Karryn desbloquea pasivas el doble de rápido.\nPara quienes quieran ver a Karryn volverse una puta más rápido.\nNota: Los trucos solo funcionan en el Modo Secretaria";

const RemYanflyOptions_Cheats_ActorNoPassiveGain_SP = "\\i[56]\\C[25]Warm Coffee";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_SP = "Karryn ya no desbloquea más pasivas.\nPara quienes quieran mantener a Karryn en este estado.\nNota: Este truco solo funciona en el Modo de Juego Libre tras ciertos Finales.";

const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_SP = "\\i[429]\\C[14]WhosYourDaddy";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_SP = "Los enemigos hacen el doble de daño a la resistencia de Karryn.\nPara quienes quieran ver a Karryn ser menos invencible.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_SP = "\\i[429]\\C[14]iddqd";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_SP = "Los enemigos hacen el triple de daño a la resistencia de Karryn.\nPara quienes quieren ver a Karryn caer en un par de golpes.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_SP = "\\i[387]\\C[1]BigDaddy";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_SP = "Los enemigos hacen el doble de daño de placer a Karryn.\nPara quienes quieren ver a Karryn sucumbir al placer más rápido.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_SP = "\\i[387]\\C[1]there is no cow level";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_SP = "Los enemigos hacen el triple de daño de placer a Karryn.\nPara quienes quieren ver a Karryn hecha un flan.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_SP = "\\i[387]\\C[1]godmode";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_SP = "Los enemigos soportan el doble de placer antes de correrse.\nPara quienes quieren que desaparezca la eyaculación precoz.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_SP = "\\i[385]\\C[2]stormbilly";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_SP = "Los enemigos actuarán todos los turnos.\nPara quien no quiera que los enemigos pierdan su turno.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_SP = "\\i[473]\\C[29]pepperoni pizza";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_SP = "Karryn tiene la mitad de regeneración de resistencia.\nPara quienes quieren ver a Karryn cansarse poco a poco.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_SP = "\\i[473]\\C[29]Thereisnospoon";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_SP = "Karryn tiene solo un tercio de regeneración de resistencia.\nPara quienes quieren que Karryn regenere mucha menos.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_ActorNoEvasion_SP = "\\i[427]\\C[30]Jack be nimble";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_SP = "Karryn ya no puede esquivar.\nPara quienes quieren que Karryn reciba todos los golpes de frente.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_ActorHalfExpRate_SP = "\\i[361]\\C[30]hoyohoyo";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_SP = "Karryn gana la mitad de experiencia.\nPara quienes quieren que karryn tarde más en subir de nivel.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_LessControlFive_SP = "\\i[377]\\C[10]ROSEBUD";
const RemYanflyOptions_Cheats_LessControlFive_Help_SP = "Baja en 5 el Control de la prisión.\nPara quienes quieren que pasa al haber menor control.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_LessControlTen_SP = "\\i[377]\\C[10]showracemenu";
const RemYanflyOptions_Cheats_LessControlTen_Help_SP = "Baja en 10 el Control de la prisión.\nPara quienes quieren bajar rápido el Control de la prisión.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_InstantRiotsOne_SP = "\\i[407]\\C[7]Greedisgood";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_SP = "El Nivel uno se va a amotinar cada 3 días.\nPara quienes quieren volver a experimentar el contenido de un cierto nivel.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_InstantRiotsTwo_SP = "\\i[407]\\C[7]black sheep wall";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_SP = "El Nivel dos se va a amotinar cada 3 días.\nPara quienes quieren volver a experimentar el contenido de un cierto nivel.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_InstantRiotsThree_SP = "\\i[407]\\C[7]lumberjack";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_SP = "El Nivel tres se va a amotinar cada 3 días.\nPara quienes quieren volver a experimentar el contenido de un cierto nivel.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_InstantRiotsFour_SP = "\\i[407]\\C[7]allyourbasearebelongtous";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_SP = "El Nivel cuatro se va a amotinar cada 3 días.\nPara quienes quieren volver a experimentar el contenido de un cierto nivel.\nNota: Los trucos solo funcionan en el Modo Secretaria";
const RemYanflyOptions_Cheats_WaitressLog_SP = "\\i[282]\\C[17]KeyserSoze";
const RemYanflyOptions_Cheats_WaitressLog_Help_SP = "Permite acceder al Registro Histórico mientras trabajas de camarera.\nPara quienes no quieren memorizar comandas.\nNota: Los trucos solo funcionan en el Modo Secretaria";

const RemYanflyOptions_Cheats_WaitressMemory_SP = "\\i[282]\\C[17]KeyserSoze";
const RemYanflyOptions_Cheats_WaitressMemory_Help_SP = "Quita el icono de la bebida que pidan los clientes del bar.\nPara quienes quierenmemorizar comandos.\nNota: Este truco funciona en todos los modos.";

const RemYanflyOptions_Cheats_NoAutoSave_SP = "\\i[282]The \\C[18]K*n*mi\\C[0] Code";
const RemYanflyOptions_Cheats_NoAutoSave_Help_SP = "Desactiva el autoguardado.\n¡Acuérdate de guardar a menudo!\nNota: Los trucos solo funcionan en el Modo Secretaria";

const RemYanflyOptions_BoobsSize_SP = "\\i[58]Tamaño de las Tetas";
const RemYanflyOptions_BoobsSize_Help_SP = "El tamaño de las tetas de Karryn es puramente cosmético y no afecta a la jugabilidad.";
const RemYanflyOptions_BoobsSize_One_SP = "Copa K (Enormes) (Por Defecto)";
const RemYanflyOptions_BoobsSize_Two_SP = "Copa H (Grandes)";
const RemYanflyOptions_BoobsSize_Three_SP = "Copa P (Inmensas)";

const RemYanflyOptions_HairColor_SP = "\\i[594]Color de Pelo de Karryn";
const RemYanflyOptions_HairColor_Help_SP = "El color del pelo de Karryn es puramente cosmético y no afecta a la jugabilidad.\nNota: En ciertos diálogos y 'cortes' la gente sigue diciendo que el pelo es morado.\nRequiere el DLC Stray Pubes.";
const RemYanflyOptions_HairColor_One_SP = "Morado (Por Defecto)";
const RemYanflyOptions_HairColor_Two_SP = "Rubio";
const RemYanflyOptions_HairColor_Three_SP = "Negro";

const RemYanflyOptions_DisplayPubicHair_SP = "\\i[595]Activar Vello Púbico";
const RemYanflyOptions_DisplayPubicHair_Help_SP = "Activa esto para que karryn tenga vello púbico.\nEsto es algo puramente cosmético y no afecta a la jugabilidad.";

const RemYanflyOptions_PubicColor_SP = "\\i[595]Color del Vello Púbico de Karryn";
const RemYanflyOptions_PubicColor_Help_SP = "Esto es algo puramente cosmético y no afecta a la jugabilidad.\nRequiere el DLC Stray Pubes.";
const RemYanflyOptions_PubicColor_Zero_SP = "Mismo color que el pelo (Por Defecto)";
const RemYanflyOptions_PubicColor_One_SP = "Morado";
const RemYanflyOptions_PubicColor_Two_SP = "Rubio";
const RemYanflyOptions_PubicColor_Three_SP = "Negro";

const RemYanflyOptions_PubicStyle_SP = "\\i[595]Estilo del Vello Púbico de Karryn";
const RemYanflyOptions_PubicStyle_Help_SP = "Esto es algo puramente cosmético y no afecta a la jugabilidad.\nRequiere el DLC Stray Pubes.";
const RemYanflyOptions_PubicStyle_One_SP = "Natural (Por Defecto)";
const RemYanflyOptions_PubicStyle_Two_SP = "Recortadito";
const RemYanflyOptions_PubicStyle_Three_SP = "Peludito";

const RemYanflyOptions_ToggleMaleStrayPubes_SP = "\\i[596]Activar Vellos Púbicos Masculinos";
const RemYanflyOptions_ToggleMaleStrayPubes_Help_SP = "Activa esta opción para que se le peguen vellos púbicos a Karryn por el cuerpo.\nRequiere el DLC Stray Pubes.";
const RemYanflyOptions_StrayPubesAmount_SP = "\\i[596]Cantidad de Vello Púbico";
const RemYanflyOptions_StrayPubesAmount_Help_SP = "Esta opción afecta a la cantidad y probabilidad de vello que se le pueden pegar a Karryn.\n¡Ve probando para ver si quieres más o menos\nvellos púbicos pegados a Karryn! Requiere el DLC Stray Pubes.";
const RemYanflyOptions_StrayPubesAmount_One_SP = "Por Defecto";
const RemYanflyOptions_StrayPubesAmount_Two_SP = "Menos";
const RemYanflyOptions_StrayPubesAmount_Three_SP = "Más";


const RemYanflyOptions_LovenseEnable_SP = "1) Activar Integración con Lovense";
const RemYanflyOptions_LovenseEnable_Help_SP = "\\}Activa esta opción para ver las opciones de integración de Lovense.\n\\{Se requiere un juguete Lovense en la vida real para usar estas opciones.";

const RemYanflyOptions_LovenseConnectionType_SP = "2) Elegir Tipo de Conexión";
const RemYanflyOptions_LovenseConnectionType_Help_SP = "Conecta tus juguetes Lovense a la app Lovense Remote.\n\\}Selecciona la versión de la app Lovense Remote estás usando para conectarte.";
const RemYanflyOptions_LovenseConnectionType_Mobile_SP = "iPhone/Android";
const RemYanflyOptions_LovenseConnectionType_PC_SP = "Windows";

const RemYanflyOptions_LovenseMobileIP_SP = "Introduce la IP Local";
const RemYanflyOptions_LovenseMobileIP_Help_SP = "\\}Introduce la IP Local mostrada en la pantalla de Modo de Juego de la app Lovense Remote.\nSi estás en streaming, esconde esta pantalla mientras metes la IP Local.";
const RemYanflyOptions_LovenseMobileIP_Text_SP = "Porfavor introduce la IP aquí";

const RemYanflyOptions_LovenseMobilePort_SP = "Introduce Puerto HTTP";
const RemYanflyOptions_LovenseMobilePort_Help_SP = "\\}Introduce el Puerto HTTP en la pantalla de Modo de Juego de la app Lovense Remote.\nSi estás en streaming, esconde esta pantalla mientras metes el Puerto HTTP.";
const RemYanflyOptions_LovenseMobilePort_Text_SP = "Porfavor introduce el puerto aquí";

const RemYanflyOptions_LovenseMobileHint_SP = "Porfavor introduce aquí";

const RemYanflyOptions_LovenseConnectToys_SP = "3) Conectar juguetes";
const RemYanflyOptions_LovenseConnectToys_Help_SP = "Pulsa el botón Conectar tras haber completado los pasos anteriores.";
const RemYanflyOptions_LovenseConnectToys_Text_SP = "CONECTAR";

const RemYanflyOptions_LovenseNoToysConnected_SP = "\\C[18]>>>Ningún juguete conectado<<<";
const RemYanflyOptions_LovenseNoToysConnected_Help_SP = "\\}Si estás teniendo problemas conectando un juguete,\nRevisa los pasos anteriores, asegúrate de estar en la misma red Wi-Fi\ny no uses VPN.";


const RemYanflyOptions_LovenseToyNameList_SP = "Nombre: %1   Batería: %2%"; //Example 'Name: Rem's Toy  Battery: 69%'
const RemYanflyOptions_LovenseToyNameList_Test_SP = "test"; 

const RemYanflyOptions_LovenseIntensity_SP = "(Opcional) Cambiar Intensidad Global";
const RemYanflyOptions_LovenseIntensity_Help_SP = "Modifica la intensidad de todas las respuestas del juguete.\n\\}La intensidad de la respuesta cambia según el acto sexual y lo puta que sea Karryn.\n\\}Su es tu primera vez y tu karry es muy puta, se recomienda bajar la sensibilidad hasta que te acostumbres.";

const RemYanflyOptions_LovenseTime_SP = "(Opcional) Cambiar Duración Global";
const RemYanflyOptions_LovenseTime_Help_SP = "\\}Los actos sexuales sin penetración activan una respuesta corta del juguete.\nEsta opción te permite cambiar la duración de esa respuesta para todos los juguetes.";
const RemYanflyOptions_LovenseTime_Zero_SP = "1/2";
const RemYanflyOptions_LovenseTime_One_SP = "Por Defecto";
const RemYanflyOptions_LovenseTime_Two_SP = "2x";
const RemYanflyOptions_LovenseTime_Three_SP = "3x";
const RemYanflyOptions_LovenseTime_Four_SP = "5x";
const RemYanflyOptions_LovenseTime_Five_SP = "Infinita";
const RemYanflyOptions_LovenseTime_Six_SP = "1/6";
const RemYanflyOptions_LovenseTime_Seven_SP = "1/4";

const RemYanflyOptions_LovensePumpEnable_SP = "(Opcional) Activar Bomba de Aire";
const RemYanflyOptions_LovensePumpEnable_Help_SP = "Los juguetes Max/Max2 se comprimen con una bomba de aire.\nCon esta opción puedes desactivarlo.";

const RemYanflyOptions_LovenseEnableRAID_SP = "4) \\C[27]Activar RAID";
const RemYanflyOptions_LovenseEnableRAID_Help_SP = "\\}\\}'Rem's Advanced Integrated Disco' o RAID para acortar es el sistema de integración hecho por Rem para Karryn's Prison.\ncon RAID apagado, TODOS los juguetes reaccionaran a TODOS los actos sexuales.\ncon RAID se establecerá una configuración según tus juguetes y \\C[27]por cada juguete se permitirá una mayor personalización.\\C[0]";

const RemYanflyOptions_RAIDparty_Help_SP = "\\}Elige si esto es un juguete '\\C[5]Grupal\\C[0]' o '\\C[4]Individual\\C[0]'.\n\\}Los juguetes\\C[5]Grupales\\C[0] responden a todos los actos sexuales EXCEPTO los atribuidos a otros juguetes.\nLos juguetes \\C[4]Individuales\\C[0] responden solo a los actos sexuales que se les atribuyen.";
const RemYanflyOptions_RAIDparty_Solo_SP = "Individual";
const RemYanflyOptions_RAIDparty_Party_SP = "Grupal";

const RemYanflyOptions_RAIDsexact_Help_SP = "\\}Elige hasta cinco actos sexuales para este juguete.\n\\}El juguete reaccionará cuando su acto atribuido lo realice Karryn.\nLos actos sexuales atribuidos serán más intensos.";
const RemYanflyOptions_RAIDsexact_Mouth_SP = "Boca";
const RemYanflyOptions_RAIDsexact_Boobs_SP = "Tetas";
const RemYanflyOptions_RAIDsexact_Clit_SP = "Clítoris";
const RemYanflyOptions_RAIDsexact_Pussy_SP = "Coño";
const RemYanflyOptions_RAIDsexact_Anal_SP = "Anal";
const RemYanflyOptions_RAIDsexact_Exhibitionism_SP = "Exhibicionismo";
const RemYanflyOptions_RAIDsexact_Masochism_SP = "Masoquismo";
const RemYanflyOptions_RAIDsexact_Sadism_SP = "Sadismo";
const RemYanflyOptions_RAIDsexact_Rimjob_SP = "Anilingus";
const RemYanflyOptions_RAIDsexact_Footjob_SP = "Paja con los Pies";
const RemYanflyOptions_RAIDsexact_Hands_SP = "Manos";

const RemYanflyOptions_RAIDarousal_Help_SP = "\\}Elige si este juguete responde a la excitación de Karryn.\nSi está activado, producirá una pequeña pero constante respuesta mientras Karryn esté excitada";
const RemYanflyOptions_RAIDarousal_ON_SP = "Excitación ACTIVADA";
const RemYanflyOptions_RAIDarousal_OFF_SP = "Excitación DESACTIVADA";
const RemYanflyOptions_RAIDorgasm_Help_SP = "\\}Elige si este juguete responde a los orgasmos de Karryn.\nSi está activado, producirá una corta pero extremadamente fuerte cuando Karryn se corra.";
const RemYanflyOptions_RAIDorgasm_ON_SP = "Orgasmos ACTIVADOS";
const RemYanflyOptions_RAIDorgasm_OFF_SP = "Orgasmos DESACTIVADOS";

const RemYanflyOptions_RAIDintensity_Help_SP = "Elige la intensidad de este juguete.\nElegir Global usará la intensidad global para todos los juguetes.";
const RemYanflyOptions_RAIDintensity_Global_SP = "Intensidad Global";

const RemYanflyOptions_RAIDtime_Help_SP = "Elige la duración de este juguete.\nElegir Global usará la intensidad global para todos los juguetes.";
const RemYanflyOptions_RAIDtime_Global_SP = "Duración Global ";
const RemYanflyOptions_RAIDTime_One_SP = "Por Defecto";
const RemYanflyOptions_RAIDTime_Two_SP = "2x";
const RemYanflyOptions_RAIDTime_Three_SP = "3x";
const RemYanflyOptions_RAIDTime_Four_SP = "5x";
const RemYanflyOptions_RAIDTime_Five_SP = "Infinita";
const RemYanflyOptions_RAIDTime_Six_SP = "1/6";
const RemYanflyOptions_RAIDTime_Seven_SP = "1/4";
const RemYanflyOptions_RAIDTime_Eight_SP = "1/2";

const RemYanflyOptions_OptionsOn_SP = "ACTIVAR";
const RemYanflyOptions_OptionsOff_SP = "DESACTIVAR";

//Save
const RemYanflySaveYesSP = "Si";
const RemYanflySaveNoSP = "No";
const RemYanflySaveEmptySP = "Vacío";
const RemYanflySaveDeleteTextSP = "¿Quieres borrar este archivo?";
const RemYanflySaveLoadTextSP = "¿Quieres cargar este archivo?";
const RemYanflySaveSaveTextSP = "¿Quieres sobreescribir este archivo?";
const RemYanflySaveInvalidTextSP = "Este archivo es de un juego distinto.";
const RemYanflySaveSelectHelpSP = "Elige una ranura de guardado.";
const RemYanflySaveLoadHelpSP = "Carga los datos de una partida guardada.";
const RemYanflySaveSaveHelpSP = "Guarda el progreso de tu partida.";
const RemYanflySaveDeleteHelpSP = "Borra todos los datos de este archivo de guardado.";
const RemYanflyAutosavingSP = "Guardado automático...";

const RemYanflySavePlaytimeSP = "Tiempo de Juego:";
const RemYanflySaveTotalSavesSP = "Partidas Totales:";
const RemYanflySaveTotalDaysSP = "Total de Días Jugados:";
const RemYanflySaveTotalPlaythroughsSP = "Playthroughs Totales:";
const RemYanflySaveTotalGameClearsSP = "Nº de Partidas Completadas:";
const RemYanflySaveTotalEndingsSP = "Endings Seen:"; // currently unused

const RemYanflyTargetEverybodySP = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodySP = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesSP = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesSP = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllySP = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemySP = "Female Enemy"; // currently unused

const RemFTSPSkillTreeConfirmTextSP = "%2";
const RemFTSPSkillTreeYesSP = "Promulgar";
const RemFTSPSkillTreeNoSP = "Cancelar";
const RemFTSPSkillTreeEdictPointsSP = "Pts. de Decreto:";
const RemFTSPSkillTreeEdictPointsAbbrSP = "PD";
const RemFTSPSkillTreeOrderSP = "Orden:";
const RemFTSPSkillTreeFundingSP = "Fondos:";
const RemFTSPSkillTreeFundingCostSP = "Coste:";
const RemFTSPSkillTreeCostItemSP = "%1 Cost:"; // currently unused
const RemFTSPSkillTreePreReqTextSP = "\\c[16]Requisitos:";
const RemFTSPSkillTreeReqTypeEdictSP = "Decreto: ";
const RemFTSPSkillTreeReqTypePassiveSP = "Pasiva: ";


const RemErrorMessageSP = "Si el mensaje de error dice 'Array buffer allocation failed' o 'resolution' o 'Out of memory', entonces el juego se ha quedado sin memoria, cierra todos los programas, ESPECIALMENTE LAS VENTANAS DEL NAVEGADOR, antes de ejecutar Karryn's Prison. Para el resto de errores, si los archivos del juego y de tu partida no se han modificado, y si estás jugando una copia legítima de Steam o DLsite, porfavor, ¡toma una captura de pantalla del error y publícala en el canal #kp-bug-reports channel de nuestro Discord! ¡Cuéntanos también tantos detalles como sea posible de lo que estaba pasando justo antes de que ocurriera el error!";

const RemEquipTypesSP = ["","Arma","Accesorio","Título","Cargar Set de Equipo", "Guardar Set de Equipo"];

const RemSkillTypesSP = ["",
"Ataque",
"Energía",
"Sexual",
"Voluntad",
"Ventajas",
"Desventajas",
"Pasivas",
"Decretos",
"Comentarios",
"Miradas",
"Pérdida de Equilibrio",
"En el Suelo",
"Masturbarse",
"Desarmada",
"Camarera",
"Barman",
"Recepcionista",
"Baño",
"Masturbarse",
"Stripper",
"Intermedio",
"Entrenadora"
];


//Enemy Types
const RemPrisonerGenericSP = " Prisionero";
const RemPrisonerGuardSP = " Guardia";
const RemPrisonerThugSP = " Matón";
const RemPrisonerGoblinSP = " Goblin";
const RemPrisonerOrcSP = " Orco";
const RemPrisonerSlimeSP = " Slime";
const RemPrisonerNerdSP = " Friki";
const RemPrisonerRogueSP = " Pícaro";
const RemPrisonerLizardmanSP = " Hombre Lagarto";
const RemPrisonerHomelessSP = " Vagabundo";
const RemPrisonerWerewolfSP = " Hombre Lobo";
const RemPrisonerYetiSP = " Yeti";


const RemReceptionistVisitorSP = "Visitante";
const RemReceptionistFanSP = "Fan";

//Boss Types
const RemBossYasuSP = "Subdirector";
const RemBossTonkinSP = "Orco";
const RemBossCargillSP = "Doctor";
const RemBossAronSP = "Hombre Lagarto Alpha";
const RemBossNoinimSP = "Gran Yeti";
const RemBossGobrielSP = "Capitán";
const RemBossEmperorSP = "Su Majestad Imperial";

//Disable Smegma Text
const RemDisableSmegmaSkill815NameSP = "Máquina Limpia-pollas";


//Skills
const RemRestoreMindPartialSuccessSP = "%1 consigue restaurar un poco de su mente.";
const RemRestoreMindFullSuccessSP = "¡%1 consigue restaurar su mente!";
const RemRestoreMindFailureSP = "¡%1 no pudo restaurar su mente...";

//Orgasm Skill Message
const RemOrgasmSkillMessageKarrynKissSP = " por dar un beso";
const RemOrgasmSkillMessageKarrynPettingSP = " por acariciar una polla";
const RemOrgasmSkillMessageKarrynHandjobSP = " por pajear una polla";
const RemOrgasmSkillMessageKarrynBlowjobSP = " por chupar una polla";
const RemOrgasmSkillMessageKarrynTittyFuckSP = " por hacer una paja con las tetas";
const RemOrgasmSkillMessageKarrynPussySexSP = " por follarse una polla con el coño";
const RemOrgasmSkillMessageKarrynAnalSexSP = " por follarse una polla por el culo";
const RemOrgasmSkillMessageEnemyKissSP = " por ser besada";
const RemOrgasmSkillMessageEnemyPettingSP = " por ser manoseada";
const RemOrgasmSkillMessageEnemyHandjobSP = " porque le han follado una mano";
const RemOrgasmSkillMessageEnemyBlowjobSP = " porque le han follado la boca";
const RemOrgasmSkillMessageEnemyTittyFuckSP = " porque le han follado las tetas";
const RemOrgasmSkillMessageEnemyPussySexSP = " por ser follada";
const RemOrgasmSkillMessageEnemyAnalSexSP = " por ser follada por el culo";
const RemOrgasmSkillMessageEnemyCunnilingusSP = " porque le han comido el coño";
const RemOrgasmSkillMessageBukkakeSP = " porque se le han corrido encima";
const RemOrgasmSkillMessageSwallowSP = " por tragar semen";
const RemOrgasmSkillMessagePussyCreampieSP = " porque le han llenado el coño de leche";
const RemOrgasmSkillMessageAnalCreampieSP = " porque le han llenado el culo de leche";
const RemOrgasmSkillMessageMasochismSP = " por ser masoquista";
const RemOrgasmSkillMessageSadismSP = " por ser sádica";
const RemOrgasmSkillMessageMasturbateSP = " por masturbarse";
const RemOrgasmSkillMessageSpankSP = " por ser azotada";
const RemOrgasmSkillMessageTalkSP = " por ser denigrada";
const RemOrgasmSkillMessageSightSP = " por ser observada";
const RemOrgasmSkillMessageToySP = " por un juguete";

//Waitress
const RemAlcoholTypeWaterSP = "un vaso de agua";
const RemAlcoholTypePaleAleSP = "una pinta de cerveza rubia";
const RemAlcoholTypeDarkAleSP = "una pinta de cerveza negra";
const RemAlcoholTypeVodkaSP = "un vaso de vodka";
const RemAlcoholTypeTequilaSP = "un vaso de tequila";
const RemAlcoholTypeGoldRumSP = "un vaso de ron dorado";
const RemAlcoholTypeOverproofRumSP = "un vaso de ron overproof";
const RemAlcoholTypeWhiskeySP = "un vaso de whisky";
const RemAlcoholTypeDirtyMugsSingularSP = "jarra usada";
const RemAlcoholTypeDirtyMugsPluralSP = "jarras usadas";
const RemAlcoholTypeDirtyGlassesSingularSP = "vaso usado";
const RemAlcoholTypeDirtyGlassesPluralSP = "vasos usados";

const RemWaitressGetsTipSP = "\\C[3]¡%1 recibe %2 de oro de propina!";
const RemWaitressEnemySleepSP = "¡%1 se duerme encima de la mesa.";
const RemWaitressEnemyWakeUpSP = "¡%1 se despierta de un bote por todo el barullo.";
const RemWaitressEnemyLeavesBarSP = "\\C[8]¡%1 se levanta y se va del bar.";
const RemWaitressEnemyLeavesBarDrunkSP = "\\C[8]¡%1 se levanta y se va del bar haciendo eses.";
const RemWaitressEnemyCallingForWaitressSP = "\\C[2]¡%1 llama la atención de la camarera.";
const RemWaitressEnemyDidntCallForWaitressSP = "Sin embargo, %1 no ha llamado a la camarera.";
const RemWaitressEnemyAskingForDrinkSP = "\\C[2]A %1 le gustaría tomar %2.";
const RemWaitressEnemyAskingForWaitressToDrinkSP = "%1 se ofrece a darle a %2 una propina si bebe de su vaso.";
const RemWaitressEnemyAskingForWaitressToFlashSP = "%1 se ofrece a darle a %2 una propina si le enseña las tetas.";
const RemWaitressRefusesDrinkSP = "Pero %1 rechaza el trago, para decepción de todos los que la rodean.";
const RemWaitressAcceptsDrinkSP = "\\C[31]%1 da un trago de la bebida mientras todos sonríen y celebran.";
const RemWaitressWontFlashSP = "Pero %1 se neiga a enseñarle las tetas a un tipo cualquiera del bar.";
const RemWaitressFlashesSP = "\\C[27]%1 sonríe y muestra su cuerpo para que la vea todo el mundo.";
const RemWaitressEnemyRefusesDrinkSP = "Pero %1 no ha pedido esa bebida.";
const RemWaitressEnemyAcceptsDrinkSP = "%1 la toma y paga la bebida.";
const RemWaitressEnemyAlcoholKissSP = "\\C[27]¡%1 fuerza a %2 a beber de su bebida con un beso!";
const RemWaitressEnemyCheerForBrawlNoDrinkSP = "%1 celebra mientras mira como se están zurrando.";
const RemWaitressEnemyCheerForBrawlYesDrinkSP = "%1 bebe mientras celebra y mira la pelea.";
const RemWaitressBrawlStartSP = "\\C[18]¡¡Ha empezado una pelea!!";
const RemWaitressBrawlJoinSP = "\\C[18]¡%1 se mete en la pelea!";
const RemWaitressBarDamageSP = "\\C[3]¡El bar recibe daños por valor de %1 de oro!";
const RemWaitressEnemyTellsJokeSP = "¡%1 cuenta un chiste.";
const RemWaitressEnemyContinuesJokeSP = "%1 sigue contando el chiste.";
const RemWaitressEnemyHearsJokeSP = "%1 escucha el chiste de %2.";
const RemWaitressEnemyLaughsJokeSP = "%1 se ríe del chiste de %2.";
const RemWaitressEnemyChugsDrinkSP = "%1 empieza a beberse su bebida.";
const RemWaitressEnemyChugsDrinkFinishSP = "%1 se termina lo que le queda de bebida.";
const RemWaitressEnemyChattingSP = "%1 charla con %2.";
const RemWaitressEnemyChattingHimselfSP = "%1 habla consigo mismo.";
const RemWaitressEnemyEntersBarSP = "\\C[2]%1 entra al bar y se sienta en %2.";
const RemWaitressEnemyFumingSP = "\\C[10]%1 tiene cara de pocos amigos...";
const RemWaitressEnemyStartSexSP = "\\C[27]¡¡¡%2 va dando tumbos hasta que tropieza y %1 la deja caer con su cuerpo sobre la mesa!!!";
const RemWaitressEnemyRefillsKarrynMugSP = "%1 rellena la jarra de %2con más cerveza rubia!";
const RemWaitressEnemyDumpsKarrynMugSP = "%1 toma la jarra de %2y tira la cerveza al suelo!";
const RemWaitressDrinkSemenMugSP = "\\C[27]¡%1 traga \\C[1]%2 ml de semen!";

const RemReceptionistVisitingRoomA_SP = "Sala de Visitas A";
const RemReceptionistVisitingRoomB_SP = "Sala de Visitas B";
const RemReceptionistVisitingRoomC_SP = "Sala de Visitas C";
const RemReceptionistVisitingRoomD_SP = "Sala de Visitas D";

const RemReceptionistNewVisitorSP = "\\C[2]El %1 coge un número y se sienta.";
const RemReceptionistNewGoblinSP = "\\C[10]¡Aparece un goblin!";
const RemReceptionistGoblinDefeatedSP = "\\C[8]¡%1 ha huido!";
const RemReceptionistVisitorEntersVisitingRoomSP = "\\C[11]%1 entra a la %2.";
const RemReceptionistVisitingRoomStatusOccupiedPluralSP = "\\C[23]\"¡A la %1 le quedan %2 minutos de uso, cambio!\"";
const RemReceptionistVisitingRoomStatusOccupiedSingleSP = "\\C[23]\"¡A la %1 le queda un minuto de uso, cambio!\"";
const RemReceptionistVisitingRoomStatusNotOccupiedSP = "\\C[23]\"¡La %1 no está en uso, cambio!\"";
const RemReceptionistVisitorWantsToHandOverPaperSP = "El %1 está esperando para entregar los papeles que ha rellenado.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomSP = "\\C[10]El %1 se está quejando de que la %2 seguía ocupada.";
const RemReceptionistGreetVisitorResultNormalSP = "El %1 responde que ha venido a hacer una visita.";
const RemReceptionistFinishedProcessingPapersSP = "Los papeles del %1 se han procesado. Tiene %2 minutos de visita.";
const RemReceptionistVisitorLeavesAngrySP = "\\C[10]¡%1 se va muy enfadado del Centro de Visitantes!";
const RemReceptionistFanLeavesHappySP = "%1 sale del Centro de Visitantes con una sonrisa.";
const RemReceptionistFanLeavesDejectedSP = "%1 se va abatido del Centro de Visitantes.";
const RemReceptionistPervLeavesHappySP = "%1 se va del Centro de Visitantes con una sonrisa asquerosa.";
const RemReceptionistPervLeavesAngrySP = "%1 sale enfadado del Centro de Visitantes.";
const RemReceptionistNotHereForVisitationSP = "¡Parece que %1 no está aquí para hacer una visita!";

const RemGloryBattleEndSP = "La puerta se abre...";
const RemGloryLeftStallCockNameSP = "La Polla de la Izquierda";
const RemGloryRightStallCockNameSP = "La Polla de la Derecha";
const RemGloryGuestEnterBathroomSP = "\\C[8]Alguien ha entrado al baño.";
const RemGloryGuestLeaveBathroomSP = "\\C[8]Alguien ha salido del baño.";
const RemGloryGuestEnterLeftStallSP = "\\C[7]Alguien ha entrado al baño de la izquierda.";
const RemGloryGuestLeaveLeftStallSP = "\\C[7]Alguien ha salido del baño de la izquierda.";
const RemGloryGuestEnterRightStallSP = "\\C[7]Alguien ha entrado al baño de la derecha.";
const RemGloryGuestLeaveRightStallSP = "\\C[7]Alguien ha salido del baño de la derecha.";
const RemGloryGuestPissingLeftStallSP = "\\C[8]Se escucha a alguien mear en el baño de la izquierda.";
const RemGloryGuestEatingLeftStallSP = "\\C[8]Se escucha a alguien comer en el baño de la izquierda.";
const RemGloryGuestPissingRightStallSP = "\\C[8]Se escucha a alguien mear en el baño de la derecha.";
const RemGloryGuestEatingRightStallSP = "\\C[8]se escucha a alguien comer en el baño de la derecha.";
const RemGloryGuestShowedThroughLeftHoleSP = "\\C[27]¡Aparece una polla en el agujero de la izquierda!";
const RemGloryGuestShowedThroughRightHoleSP = "\\C[27]¡Aparece una polla en el agujero de la derecha!";

const RemStripperBattleEndSP = "El espectáculo de Karryn ha acabado.";
const RemStripperEnemyTossCondomOntoStageSP = "%1 tira un condón al escenario.";
const RemStripperEnemyTipsCondomToBeltSP = "%1 ata un condón al liguero de %2!";
const RemStripperEnemyTipsCondomToBraSP = "%1 ata un condón al sujetador de %2!";
const RemStripperEnemyTipsCondomToNippleSP = "%1 ata un condón al pezón erecto de %2!";
const RemStripperEnemyTipsCondomToHairbandSP = "%1 ata un condón a la tiara de conejita de %2!";
const RemStripperEnemyTipsCondomToSidetailSP = "%1 ata un condón a la cola de %2!";
const RemStripperEnemyEntersStripClubSP = "\\C[8]%1 se sienta delante del escenario.";
const RemStripperEnemyLeavesStripClubHappySP = "\\C[8]%1 se levanta y se va con una sonrisa.";
const RemStripperEnemyLeavesStripClubUnhappySP = "\\C[8]%1 se levanta y se va frustrado.";
const RemStripperEnemyJoinVIPSingularSP = "\\C[8]%1 agarra la mano del cliente que queda y se lo lleva a una sala privada......";
const RemStripperEnemyJoinVIPPluralSP = "\\C[8]%1 agarra las manos de los clientes que quedan y se los lleva a una sala privada......";

const RemTrainerEnemyObserveFormExcellentSP = "\\C[8](La forma de %1 es \\C[10]practicamente perfecta\\C[8].)";
const RemTrainerEnemyObserveFormGoodSP = "\\C[8](La forma de %1 pinta bien%2\\C[8].)";
const RemTrainerEnemyObserveFormOkaySP = "\\C[8](La forma de %1 podría ser mejor%2\\C[8].)";
const RemTrainerEnemyObserveFormPoorSP = "\\C[8](La forma de %1 tiene mucho que mejorar%2\\C[8].)";
const RemTrainerEnemyObserveFormBadSP = "\\C[8](La forma de %1 es absolutamente terrible%2\\C[8].)";
const RemTrainerEnemyObserveFormMaxSP = "\\C[8] y parece que \\C[10]esto es lo mejor que puede hacer"; //上のGood～Badの％２はここ
const RemTrainerEnemyObserveStaminaTiredSP = "\\C[8](Empieza a parece cansado.)";
const RemTrainerEnemyObserveStaminaExhaustedSP = "\\C[8](Parece cansado.)";
const RemTrainerEnemyEntersGymSP = "\\C[2]%1 entra al gimnasio y empieza a entrenar.";
const RemTrainerEnemyLeavesGymFinishedWorkoutSP = "\\C[8]%1 termina su entrenamiento y sale del gimnasio.";
const RemTrainerEnemyLeavesGymFailedWorkoutSP = "\\C[8]%1 no pudo acabar su entrenamiento y sale del gimnasio cansado.";
const RemTrainerEnemyLeavesGymBlueballedSP = "\\C[8]%1 está demasiado cachondo y sale del gimnasio.";
const RemTrainerEnemyLeavesGymHappySP = "\\C[8]%1 no pudo acabar su entrenamiento pero sale del gimnasio con una gran sonrisa.";
const RemTrainerRinkanSpatsRippedSP = "¡Los Leggins de Karryn se han roto!";

const RemMidBattleEnemyReinforcementSP = "\\C[2]%1 llega de refuerzo!";

const RemLevelFiveFreeBattleDefeatSettingSP = [
"un Nivel aleatorio",
"Almacén del Bar del Nivel 1",
"Baño del Nivel 2",
"Celda Solitaria del Nivel 3",
"Área Abandonada del Nivel 4",
"Altar del Nivel 5"
];
