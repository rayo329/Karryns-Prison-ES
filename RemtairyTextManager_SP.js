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
"Target Rate",
"Weapon Defense",
"Recovery Rate",
"Energy Skill Cost",
"Weapon Attack",
"Willpower Regen",
"Will Skill Cost",
"Sex Skill Cost",
"Attack Skill Cost",
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
const GuardNameSP = "Acabar Fase Mental";
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
const ActorNoDamageGrazeSP = "¡Graze! ¡%1 no recibe daño!";
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


const WardenNameSP = "Nivel De Directora";
const WardenLvlLimitSP = "Límite De Nivel De Directora";
const SlutNameSP = "Nivel De Puta";
const StatLevelNameSP = "Nivel de %1";
const DayNameSP = "Día";
const OrderNameSP = "Orden";
const OrderChangeNameSP = "Control";
const CorruptionNameSP = "Corrupción";
const TitlesNameSP = "Títulos";
const FundingNameSP = "Fondos";
const LedgerNameSP = "《 Libro De Cuentas 》";
const IncomeNameSP = "Ingresos Generales";
const BarIncomeNameSP = "Ingresos Del Bar";
const StoreIncomeNameSP = "Ingresos De La Tienda";
const OutsourcingIncomeNameSP = "Ingresos Por Subcontrat.";
const NerdBlackmailNameSP = "Chantaje De Los Frikis";
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
const RCMenuMetalPluralTextSP = "\\C[0]Karryn ha subyugado %2 reclusos metálico hoy. (\\C[11]Experiencia +%1%\\C[0])";

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
const StatusMenuPrimarySP = "Primario";
const StatusMenuSecondarySP = "Segundario";
const StatusMenuProfileSP = "Perfil";
const StatusMenuTertiarySP = "Terciario";
const StatusMenuRecordsSP = "Registros";
const StatusMenuDesiresSP = "Deseos";
const StatusMenuEffectsSP = "Condición";

const StatusMenuStatsSP = "Estadísticas";
const StatusMenuStatLevelsSP = "《 Niveles de Estadísticas 》";
const StatusMenuAttributesSP = "《 Atributos 》";
const StatusMenuResistsSP = "《 Resistencias 》";
const StatusMenuLevelsSP = "《 Niveles Sexuales 》";
const StatusMenuSensitivitiesSP = "《 Sensibilidades 》";

const StatusMenuMouthDesireReqSP = "《 Requerimientos de Deseo: Boca 》";
const StatusMenuBoobsDesireReqSP = "《 Requerimientos de Deseo: Tetas 》";
const StatusMenuPussyDesireReqSP = "《 Requerimientos de Deseo: Coño 》";
const StatusMenuButtDesireReqSP = "《 Requerimientos de Deseo: Culo 》";
const StatusMenuCockDesireReqSP = "《 Requerimientos de Deseo: Polla 》";

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
const ProfileRecordSecretSP = "\\C[7]Secreto\\C[0]";
const ProfileRecordNeverSP = "\\C[29]Nunca\\C[0]";

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
const ProfileRecordClitPettingSP = "Acariciar Clítoris";
const ProfileRecordPussyPettingSP = "Acariciar Coño";
const ProfileRecordButtPettingSP = "Acariciar Culo";
const ProfileRecordAnalPettingSP = "Acariciar Ano";
const ProfileRecordClitToySP = "Juguete de Clítoris";
const ProfileRecordPussyToySP = "Juguete Vaginal";
const ProfileRecordAnalToySP = "Juguete Anal";
const ProfileRecordPussySexSP = "Sexo Vaginal";
const ProfileRecordAnalSexSP = "Sexo Anal";


const ProfileRecordFirstKissSP = "Di mi primer beso a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstKissWasPenisSP = "Di mi primer beso a la polla de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstKissWasAnusSP = "Di mi primer beso al ano de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordLastKissSP = "Besé a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstSexSP = "Perdí mi virginidad con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstPussySexWasDildoSP = "Perdí mi virginidad con el dildo de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastSexSP = "Tuve sexo con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstAnalSP = "Perdí mi virginidad anal con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastAnalSP = "Tuve sexo anal con \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstHandjobSP = "Hice mi primera paja el \\C[26]Día %1\\C[0] en %3 con la polla de \\C[31]%2\\C[0].";
const ProfileRecordLastHandjobSP = "Le hice una paja a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstBlowjobSP = "Mi primera mamada fue el \\C[26]Día %1\\C[0] en %3 con la polla de \\C[31]%2\\C[0].";
const ProfileRecordLastBlowjobSP = "Le hice una mamada a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstTittyFuckSP = "Le Hice mi primera paja con las tetas a \\C[31]%2\\C[0] el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastTittyFuckSP = "Le hice una paja con las tetas a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordFirstFootjobSP = "Le Hice mi primera paja con los pies a \\C[31]%2\\C[0] el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastFootjobSP = "Le hice una paja con los pies a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstRimjobSP = "Hice mi primer anilingus a \\C[31]%2\\C[0] el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastRimjobSP = "Le comí el culo a \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordFirstBukkakeSP = "\\C[31]%2\\C[0] me hizo mi primer bukkake el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastBukkakeSP = "\\C[31]%2\\C[0] se corrió sobre mi en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstFaceBukkakeSP = "Mi primera corrida en la cara fue de \\C[31]%2\\C[0], el \\C[26]Día %1\\C[0] en %3.";
const ProfileRecordLastFaceBukkakeSP = "\\C[31]%2\\C[0] se corrió en mi cara en %3 el \\C[26]Día %1\\C[0].";

const ProfileRecordFirstSwallowSP = "Probé semen por primera vez el \\C[26]Día %1\\C[0] en %3, me tragué el semen de \\C[31]%2\\C[0].";
const ProfileRecordLastSwallowSP = "Me tragué el semen de \\C[31]%2\\C[0] en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstPussyCreampieSP = "Dejé que \\C[31]%2\\C[0] se corriera en mi coño en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastPussyCreampieSP = "Dejé que \\C[31]%2\\C[0] se corriera en mi coño en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordFirstAnalCreampieSP = "Dejé que \\C[31]%2\\C[0] se corriera en mi culo en %3 el \\C[26]Día %1\\C[0].";
const ProfileRecordLastAnalCreampieSP = "\\C[31]%2\\C[0] me llenó el culo de leche en %3 el \\C[26]Día %1\\C[0].";


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
const StatusRecordStripSP = "me han desnudado %1 veces y otras personas me han quitado las bragas %2 veces.";
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
const StatusBattleEffectOrgasmSP = "Karryn \\C[5]just orgasmed\\C[0]! She's a mess right now and can not do anything!";
const StatusBattleEffectCoolSP = "Karryn is \\C[4]cool and collected\\C[0] from having low desires!\nHer accuracy, evasion, critical rate, critical evasion and regens are slightly increased.";
const StatusBattleEffectIsHornyZeroSP = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased.";
const StatusBattleEffectIsHornyOneSP = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased, and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyTwoSP = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased,\nsuppress desire skills cost more and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyThreeSP = "Karryn is \\C[18]horny\\C[0]! Her evasion, accuracy and all her sexual resists are decreased,\nsuppress desire skills cost more, and all her desires will rise a bit every turn.";
const StatusBattleEffectIsArousedSP = "Karryn is \\C[27]aroused\\C[0]! Her pussy will slowly get \\C[23]wetter\\C[0] every turn.";
const StatusBattleEffectNotArousedSP = "Karryn is currently not aroused. She must be aroused before her pussy can get any wetter.";
const StatusBattleEffectIsWetSP = "Karryn is \\C[23]wet\\C[0]! She is now able to receive vaginal penetration.";
const StatusBattleEffectNotWetSP = "Karryn is currently not wet. She will not receive any vaginal penetration.";
const StatusBattleEffectIsWearingPantiesSP = "Karryn is wearing panties. Her clothes need to be heavily displaced before her nether regions are accessible.";
const StatusBattleEffectIsNotWearingPantiesSP = "Karryn is \\C[27]not wearing any panties\\C[0]! Her clothes only need to be moderately displaced before her nether regions are accessible.";
const StatusBattleEffectIsVirginPublishedSP = "Karryn is a \\C[27]known virgin\\C[0]! Her charm during battle is increased.";
const StatusBattleEffectIsVirginHighSP = "Karryn is a \\C[27]suspected virgin\\C[0]! Her charm during battle is increased.";
const StatusBattleEffectIsVirginMedSP = "Karryn is rumored to still be a \\C[27]virgin\\C[0]! Her charm during battle is slightly increased.";
const StatusBattleEffectIsVirginLowSP = "Karryn is actually still a \\C[27]virgin\\C[0] but no one thinks she is! Her charm during battle remains unaffected.";

const StatusBattleEffectIsConfidentZeroSP = "Karryn is feeling \\C[30]confident\\C[0]! All her stats are increased!";
const StatusBattleEffectIsConfidentOneSP = "Karryn is feeling \\C[30]confident\\C[0]! All her stats are increased based on her cockiness!";

const StatusBattleEffectIsFrustratedSP = "Karryn is \\C[18]sexually frustrated\\C[0]! Her Attack is increased while her Defense, Agility, Accuracy and Critical Evasion are decreased!";

const StatusBattleEffectDisarmedSP = "Karryn is \\C[18]disarmed\\C[0]! She will need to get closer to her halberd to rearm herself.";
const StatusBattleEffectDefiledHalberdSP = "Karryn's \\C[18]halberd is currently defiled\\C[0]! She can't use her halberd until she rests in her office or a guard station.";
const StatusBattleEffectOffBalancedSP = "Karryn is \\C[18]off-balanced\\C[0]! Her attack, defense and evasion are decreased.";
const StatusBattleEffectWeakenSP = "Karryn is \\C[18]weakened\\C[0]! Her strength and attack are decreased.";
const StatusBattleEffectDizzySP = "Karryn is \\C[18]dizzy\\C[0]! Her accuracy and evasion are decreased.";
const StatusBattleEffectSlowSP = "Karryn is \\C[18]slowed\\C[0]! Her agility is greatly decreased.";
const StatusBattleEffectVulnerableSP = "Karryn is currently \\C[18]vulnerable\\C[0]! Her defense is decreased.";
const StatusBattleEffectPoisonSP = "Karryn is \\C[18]poisoned\\C[0]! Her stamina decreases every turn instead of regenerating.";
const StatusBattleEffectYetiHeatAuraOneSP = "Karryn is being affected by \\C[18]the Yeti's heat aura\\C[0]! Her stamina regeneration is greatly decreased.";
const StatusBattleEffectYetiHeatAuraTwoSP = "Karryn is being affected by \\C[18]the Yetis's heat aura\\C[0]! Her stamina and willpower regeneration are greatly decreased.";
const StatusBattleEffectExposeWeaknessSP = "Karryn's \\C[18]weaknesses are exposed\\C[0]! Her evasion, critical evasion, and all her resists are decreased.";
const StatusBattleEffectAttackComboSP = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]! The damage, accuracy and cost of her next attack will be increased.";
const StatusBattleEffectAttackComboCockySP = "Attacking four times or more in a row will increase her \\C[30]cockiness\\C[0].";
const StatusBattleEffectSexComboOneSP = "Karryn has used her sexual skills \\C[2]%1 consecutive times\\C[0]! The pleasure damage and cost of her next non-petting sexual skill will be increased.";
const StatusBattleEffectSexComboTwoSP = "Consecutively using the same type of non-petting sexual skill on the same person will also greatly increase pleasure damage and cost.";

const StatusBattleEffectDanceComboSP = "Karryn has used her stripper skills \\C[2]%1 consecutive times\\C[0]! The pleasure damage and stamina cost of her next stripper skill will be increased.";


//Tooltipsは戦闘画面のステートTooltipに表示される
const StateTooltipsRemainingTurnsSingularSP = "\\c[27](1 Turn Left)\\c[0]";
const StateTooltipsRemainingTurnsPluralSP = "\\c[27](%1 Turns Left)\\c[0]";

const StateTooltipsOrgasmSP = "Karryn \\C[5]just orgasmed\\C[0]!\nShe's a mess right now and can not do anything!";
const StateTooltipsSlashStanceSP = "%1 will take more damage and\nbe easier to hit with a \\C[4]Pierce-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[2]Blunt-type attack.\\C[0]";
const StateTooltipsPierceStanceSP = "%1 will take more damage and\nbe easier to hit with a \\C[2]Blunt-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[3]Slash-type attack.\\C[0]";
const StateTooltipsBluntStanceSP = "%1 will take more damage and\nbe easier to hit with a \\C[3]Slash-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[4]Pierce-type attack.\\C[0]";
const StateTooltipsHornyZeroSP = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased.";
const StateTooltipsHornyOneSP = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyTwoSP = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased,\nher suppress desire skills cost more,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyThreeSP = "Karryn is \\C[18]horny\\C[0]!\nHer evasion, accuracy and all her sexual resists are decreased,\nher suppress desire skills cost more,\nand all her desires will rise a bit every turn.";



const StateTooltipsEnemyHornySP = "%1 is \\C[18]horny\\C[0]!\nHe has higher act chance, lower attack chance, lower resists\nlower charm requirement, and will ejaculate more.";

const StateTooltipsCoolSP = "Karryn is \\C[4]cool and collected\\C[0] from having low desires!\nHer accuracy, evasion, critical rate, critical evasion\nand all her regens are slightly increased.";

const StateTooltipsIsWetSP = "Karryn is \\C[23]wet\\C[0]!\nShe is now able to receive vaginal penetration.";
const StateTooltipsNotWetSP = "Karryn is currently not wet.\nShe will not allow any vaginal penetration.";
const StateTooltipsWearingPantiesSP = "Karryn is wearing panties.\nHer clothes need to be heavily displaced\nbefore her nether regions are accessible.";
const StateTooltipsNotWearingPantiesSP = "Karryn is \\C[27]not wearing any panties\\C[0]! \nHer clothes only need to be moderately displaced before her nether regions are accessible.";
const StateTooltipsVirginPublishedSP = "Karryn is a \\C[27]known virgin\\C[0]!\nHer charm during battle is increased.";
const StateTooltipsVirginHighSP = "Karryn is a \\C[27]suspected virgin\\C[0]!\nHer charm during battle is increased.";
const StateTooltipsVirginMedSP = "Karryn is rumored to still be a \\C[27]virgin\\C[0]!\nHer charm during battle is slightly increased.";
const StateTooltipsVirginLowSP = "Karryn is actually still a \\C[27]virgin\\C[0] but no one thinks she is!\nHer charm during battle remains unaffected.";
const StateTooltipsConfidentZeroSP = "Karryn is feeling \\C[30]confident\\C[0]!\nAll her stats are increased!";
const StateTooltipsConfidentOneSP = "Karryn is feeling \\C[30]confident\\C[0]!\nAll her stats are increased based on her cockiness!";
const StateTooltipsFrustratedSP = "Karryn is \\C[18]sexually frustrated\\C[0]!\nHer Attack is increased but her Defense, Agility,\nAccuracy and Critical Evasion are decreased!";
const StateTooltipsDisarmedSP = "Karryn is \\C[18]disarmed\\C[0]!!\nShe will need to get closer to her halberd to rearm herself.";
const StateTooltipsOffBalancedSP = "%1 is \\C[18]off-balanced\\C[0]!\nTheir attack, defense and evasion are decreased.";
const StateTooltipsWeakenSP = "%1 is \\C[18]weakened\\C[0]!\nTheir strength and attack are decreased.";
const StateTooltipsDizzySP = "%1 is \\C[18]dizzy\\C[0]!\nTheir accuracy and evasion are decreased.";
const StateTooltipsSlowSP = "%1 is \\C[18]slowed\\C[0]!\nTheir agility is greatly decreased.";
const StateTooltipsVulnerableSP = "%1 is currently \\C[18]vulnerable\\C[0]!\nTheir defense is decreased.";
const StateTooltipsPoisonSP = "%1 is \\C[18]poisoned\\C[0]!\nTheir stamina decreases every turn instead of regenerating.";
const StateTooltipsExposeWeaknessSP = "Karryn's \\C[18]weaknesses are exposed\\C[0]!\nHer evasion, critical evasion,\nand all her resists are decreased.";
const StateTooltipsStunnedSP = "%1 is \\C[18]stunned\\C[0]!\nTheir current turn will be skipped.";
const StateTooltipsEnemyPoseMasterSP = "Karryn's current sexual position might reset after %1 ejaculates!";
const StateTooltipsActorAttackComboSP = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]!\nThe damage, accuracy and cost of her next attack will be increased.";
const StateTooltipsActorAttackComboCockySP = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]!\nThe damage, accuracy and cost of her next attack will be increased.\nAttacking four times or more in a row will increase her \\C[30]cockiness\\C[0].";
const StateTooltipsActorSexComboSP = "Karryn has used her sexual skills \\C[2]%1 consecutive times\\C[0]!\nThe pleasure damage and cost of her next non-petting sexual skill will be increased.\nConsecutively using the same type of non-petting sexual skill on the same person will also greatly increase pleasure damage and cost.";
const StateTooltipsEnemyPosePussySexSP = "%1 is fucking Karryn's pussy!";
const StateTooltipsEnemyPoseCunnilingusSP = "%1 is licking Karryn's pussy!";
const StateTooltipsEnemyPoseAnalSexSP = "%1 is fucking Karryn's ass!";
const StateTooltipsEnemyPosePaizuriSP = "%1 is fucking Karryn's breasts!";
const StateTooltipsEnemyPoseHandjobSP = "%1 is getting a handjob from Karryn!";
const StateTooltipsEnemyPoseBlowjobSP = "%1 is getting a blowjob from Karryn!";
const StateTooltipsEnemyPoseFootjobSP = "%1 is getting a footjob from Karryn!";
const StateTooltipsEnemyPoseRimjobSP = "%1 is getting a rimjob from Karryn!";
const StateTooltipsEnemyKissedSP = "%1 got kissed!\nHis attack, accuracy and evasion are decreased.";
const StateTooltipsArousedSP = "Karryn is \\C[27]aroused\\C[0]!\nHer pussy will slowly get \\C[23]wetter\\C[0] every turn.";
const StateTooltipsCautiousStanceSP = "Karryn's evasion and critical evasion are greatly increased.";
const StateTooltipsDefensiveStanceSP = "Karryn is protected from various debuffs.\nHer defense, overblow protection, petting resist,\nand strip resist are also greatly increased.";
const StateTooltipsCounterStanceSP = "Karryn's counterattack rate is greatly increased.\nHer maximum number of counterattacks is increased.\nHer overblow protection is slightly increased.";
const StateTooltipsSecretaryStanceSP = "Karryn's talk, sight, petting\nand sex resists are greatly increased.\nPleasure damage dealt to enemies are increased.";
const StateTooltipsLadyStanceSP = "Karryn's petting and sex resists are slightly increased.\nHer charm during battle is increased.";
const StateTooltipsPleasureStanceSP = "Karryn is welcoming the pleasure.♥";
const StateTooltipsWillpowerKiOneSP = "Karryn's attack is increased.";
const StateTooltipsWillpowerKiTwoSP = "Karryn's attack and critical damage are increased.";
const StateTooltipsWillpowerFocusOneSP = "Karryn's counterattack rate is increased.";
const StateTooltipsWillpowerFocusTwoSP = "Karryn's counterattack rate and overblow protection are increased.";
const StateTooltipsWillpowerEyeOfTheMindOneSP = "Karryn's accuracy, evasion and critical rate are increased.";
const StateTooltipsWillpowerEyeOfTheMindTwoSP = "Karryn's accuracy, evasion, critical rate\nand critical damage are increased.";
const StateTooltipsWillpowerSeeNoEvilSP = "Karryn's sight resist is increased.";
const StateTooltipsWillpowerHearNoEvilSP = "Karryn's talk resist is increased.";
const StateTooltipsWillpowerRealityMarbleSP = "Karryn's charm during battle is increased.";
const StateTooltipsWillpowerResistOrgasmSP = "Karryn is trying to resist having an orgasm!\nThe amount of pleasure required to have an orgasm is increased.";
const StateTooltipsWillpowerEdgingControlKarrynSP = "Karryn is trying to edge her next target!\nThe amount of pleasure required to have an ejaculation\nfor her next target is increased.";
const StateTooltipsWillpowerEdgingControlEnemySP = "%1 is being edged by Karryn!\nThe amount of pleasure required to have an ejaculation is increased.";
const StateTooltipsBonusPierceDamageSP = "%1 will deal extra damage with \\C[4]Pierce-type attacks\\C[0].";
const StateTooltipsBonusBluntDamageSP = "%1 will deal extra damage with \\C[2]Blunt-type attacks\\C[0].";
const StateTooltipsBonusSlashDamageSP = "%1 will deal extra damage with \\C[3]Slash-type attacks\\C[0].";
const StateTooltipsEjaculationStunnedSP = "%1 is \\C[18]stunned\\C[0]!\nHis current turn will be skipped.\nHis sexual resists are increased.\nHis evasion and critical evasion are decreased.";
const StateTooltipsSlimeRegenNormalSP = "%1 will regenerate 20% of stamina per turn.";
const StateTooltipsSlimeRegenFourthSP = "%1 will regenerate 5% of stamina per turn.";
const StateTooltipsOrcDefensivePresenceSP = "%1's defense is increased.";
const StateTooltipsOrcCommandingPresenceOneSP = "%1's attack, defense and evasion are increased.";
const StateTooltipsOrcCommandingPresenceTwoSP = "%1's defense and evasion are increased.";
const StateTooltipsOrcCommandingPresenceThreeSP = "%1's attack is increased.";
const StateTooltipsOrcCommandingPresenceFourSP = "%1's pleasure damage is increased.";
const StateTooltipsLizardmanRacialSP = "%1 is with another lizardman.\nAll his stats are increased.";
const StateTooltipsLizardmanRacialWeakSP = "%1 is with another lizardman.\nAll his stats are slightly increased.";
const StateTooltipsYetiHeatAuraSP = "%1's heat aura causes\nvarious debuffs to everyone.";
const StateTooltipsYetiHeatAuraEnemyOneSP = "%1 is being affected by \\C[18]the Yeti's heat aura\\C[0]!\nHe is dealing lower pleasure damage.";
const StateTooltipsYetiHeatAuraEnemyTwoSP = "%1 is being affected by \\C[18]the Yetis's heat aura\\C[0]!\nHe is dealing greatly lower pleasure damage.";
const StateTooltipsYetiHeatAuraKarrynOneSP = "Karryn is being affected by \\C[18]the Yeti's heat aura\\C[0]!\nHer stamina regeneration is greatly decreased.";
const StateTooltipsYetiHeatAuraKarrynTwoSP = "Karryn is being affected by \\C[18]the Yetis's heat aura\\C[0]!\nHer stamina and willpower regeneration\nare greatly decreased.";

const StateTooltipsYasuKiSP = "%1's damage is increased.";
const StateTooltipsYasuFocusSP = "%1 may counterattack.";
const StateTooltipsYasuEyeoftheMindSP = "%1's accuracy, critical rate and critical damage are increased.";
const StateTooltipsEnemyDefensiveStanceSP = "%1 is protected from various debuffs.\nTheir defensive and overblow protection are also increased.";

const StateTooltipsKarrynClitToySP = "Karryn has a toy attached to her clitoris!";
const StateTooltipsKarrynPussyToySP = "Karryn has a toy inserted in her pussy!";
const StateTooltipsKarrynAnalToySP = "Karryn has a toy inserted in her anus!";
const StateTooltipsEnemyClitToyPinkRotorSP = "%1 has a pink rotor!";
const StateTooltipsEnemyPussyToyPenisDildoSP = "%1 has a penis dildo!";
const StateTooltipsEnemyAnalToyAnalBeadsSP = "%1 has anal beads!";
const StateTooltipsToiletPinkRotorSP = "Someone left a pink rotor in the stall...";
const StateTooltipsToiletPenisDildoSP = "Someone left a penis dildo in the stall...";
const StateTooltipsToiletAnalBeadsSP = "Someone left anal beads in the stall...";
const StateWaitressNoAlcoholSP = "Karryn is refusing all \\C[2]attempts to get her to drink\\C[0].\n%1 Willpower will be required to refuse a drink.\nHer Willpower Regen will also be greatly reduced after refusing a drink.";
const StateWaitressDirtyMugsSingularSP = "%1 has a dirty mug waiting to be collected.";
const StateWaitressDirtyMugsPluralSP = "%1 has %2 dirty mugs waiting to be collected.";
const StateWaitressDirtyGlassesSingularSP = "%1 has a dirty glass waiting to be collected.";
const StateWaitressDirtyGlassesPluralSP = "%1 has %2 dirty glasses waiting to be collected.";
const StateWaitressAvailableMugsSingularSP = "There is only one clean mug available.";
const StateWaitressAvailableMugsPluralSP = "There are %1 clean mugs available.";
const StateWaitressAvailableGlassesSingularSP = "There is only one clean glass available.";
const StateWaitressAvailableGlassesPluralSP = "There are %1 clean glasses available.";
const StateWaitressKarrynLocationSP = "Karryn is at %1.";
const StateWaitressTableALocationSP = "Karryn is at Table A.";
const StateWaitressTableBLocationSP = "Karryn is at Table B.";
const StateWaitressTableCLocationSP = "Karryn is at Table C.";
const StateWaitressTableDLocationSP = "Karryn is at Table D.";
const StateWaitressSleepingSP = "%1 is drunkenly sleeping!\nKick them out of the bar!";
const StateWaitressDrinkingDrinkSP = "%1 is drinking a %2.";

const StateWaitressDrinkingNothingSP = "%1 is not currently drinking anything.";
const StateWaitressWantsDrinkSP = "%1 ordered a %2.";

const StateReceptionistVisitorUnknownBeforeSP = "%1 has not stated the purpose of their visitation yet.";
const StateReceptionistVisitorUnknownAfterSP = "%1 is waiting for Karryn's response.";
const StateReceptionistVisitorWritingBeforeSP = "%1 is holding the papers they need to fill out.";
const StateReceptionistVisitorWritingDuringSP = "%1 is filling out the paperwork.";
const StateReceptionistVisitorWritingAfterSP = "%1 is holding the papers they filled out.";
const StateReceptionistVisitorPaperBeforeSP = "%1's %2 pages of paperwork need to be processed.";
const StateReceptionistVisitorPaperAfterSP = "%1's %2 pages of paperwork are being processed.";
const StateReceptionistVisitorTimeSP = "%1's paperwork has been processed.\nThey are allowed %2 minutes for visitation.";
const StateReceptionistVisitorMovingSP = "%1 is currently walking.";
const StateReceptionistVisitorSittingSP = "%1 is sitting in their seat.";
const StateReceptionistVisitorLineSP = "%1 is waiting on line in front of the desk.";
const StateReceptionistVisitorDeskSP = "%1 is standing in front of the desk.";

const StateStripperActorDanceComboSP = "Karryn has used her stripper skills \\C[2]%1 consecutive times\\C[0]!\nThe pleasure damage and stamina cost of her next stripper skill will be increased.";

const StateTrainerKarrynLocationSP = "Karryn is with %1.";

const DesireTooltipsMouthIntroSP = "Karryn's Mouth Desire represents her desire\nto have men's body parts in her mouth\nand to taste their various bodily fluids.";
const DesireTooltipsBoobsIntroSP = "Karryn's Boobs Desire represents her desire\nto have her perfect breasts be squeezed,\nto have her nipples be squeezed hard,\nand to have hard objects inbetween them.";
const DesireTooltipsPussyIntroSP = "Karryn's Pussy Desire represents her desire\nto have her clitoris be played with and\nto have increasingly bigger objects\ninserted into her pussy.";
const DesireTooltipsButtIntroSP = "Karryn's Butt Desire represents her desire\nto have her big butt be groped by others\nand to have foreign objects be put up her ass.";
const DesireTooltipsCockIntroSP = "Karryn's Cock Desire represents her desire\nto know everything there is know about\neveryone's cock through sight, hearing,\nsmell, taste and touch.";

const DesireTooltipsBodyDesireRequirementsUnknownSP = "\\I[40] 50    \\I[41]   Soft Petting\n\\I[40] 75    \\I[41]   Heavy Petting\n\\I[40]100   \\I[41]   Sex\n(Default Desire Requirements)";
const DesireTooltipsCockDesireRequirementsUnknownSP = "\\I[40] 50    \\I[41]   Handjob\n\\I[40] 65    \\I[41]   Service\n\\I[40] 85    \\I[41]   Penetration\n(Default Desire Requirements)";
const DesireTooltipsDesireRequirementsKnownSP = "Desire Requirements";
const DesireTooltipsDesireRequirementsKnownFormatSP = "";


const DesireTooltipsMouthDesireDebuffOneSP = "\\I[56]\\C[2]Karryn's Accuracy will start decreasing\n\\C[0]at 50 Mouth Desire and above from\nunconsciously opening her mouth wider\nto shout out her attacks beforehand.";
const DesireTooltipsMouthDesireDebuffTwoSP = "\\I[56]\\C[2]Karryn's Critical Damage will start decreasing\n\\C[0]at 100 Mouth Desire and above from wasting\ntime on excessively licking her lips to satisfy\nher urges to have something else there.";

const DesireTooltipsBoobsDesireDebuffOneSP = "\\I[56]\\C[2]Karryn's Evasion will start decreasing\n\\C[0]at 50 Boobs Desire from being too\ndistracted by her nipples demanding\nsome love and attention.";
const DesireTooltipsBoobsDesireDebuffTwoSP = "\\I[56]\\C[2]Karryn's Critical Rate will start decreasing\n\\C[0]at 100 Boobs Desire from the pressure on \nher chest making her feel like they are\ntrying to escape.";

const DesireTooltipsPussyDesireDebuffOneSP = "\\I[56]\\C[2]Karryn's Strip Resist will start decreasing\n\\C[0]at 50 Pussy Desire from wanting to free\nher vagina from its pulsing heat.";
const DesireTooltipsPussyDesireDebuffTwoSP = "\\I[56]\\C[2]Karryn's Critical Evasion will start decreasing\n\\C[0]at 100 Pussy Desire from the phantom ache\naround her vulva distracting her. ";

const DesireTooltipsButtDesireDebuffOneSP = "\\I[56]\\C[2]Karryn's Defense will start decreasing\n\\C[0]at 50 Butt Desire from unconsciously messing\nup her stance by showing off her ass.";
const DesireTooltipsButtDesireDebuffTwoSP = "\\I[56]\\C[2]Karryn's Pet Resist will start decreasing\n\\C[0]at 100 Butt Desire from wanting a man\nto vigorously attack her naughty ass.";

const DesireTooltipsCockDesireDebuffOneSP = "\\I[56]\\C[2]Karryn's Attack will start decreasing\n\\C[0]at 50 Cock Desire from unconsciously\nholding back her full power in case\nshe accidently hits them in the groin.";
const DesireTooltipsCockDesireDebuffTwoSP = "\\I[56]\\C[2]Karryn's Sex Resist will start decreasing\n\\C[0]at 100 Cock Desire from the thoughts in\nher head telling her to just submit to cock.";

const DesireTooltipsMouthDesireTopBuffSP = "\\I[56]When Karryn's Mouth Desire is her top desire,\n\\C[11]her enemies' Defense will be lowered\n\\C[0]because of her seductively inviting mouth\nand lewd tongue movements.";
const DesireTooltipsBoobsDesireTopBuffSP = "\\I[56]When Karryn's Boobs Desire is her top desire,\n\\C[11]her enemies' Evasion will be lowered\n\\C[0]because they can't keep their eyes off the tits\nshe keeps emphasizing with every move.";
const DesireTooltipsPussyDesireTopBuffSP = "\\I[56]When Karryn's Pussy Desire is her top desire,\n\\C[11]her enemies have an increased chance of\ngetting Horny every turn \\C[0]because of the\npheromones leaking out of her honey trap.";
const DesireTooltipsButtDesireTopBuffSP = "\\I[56]When Karryn's Butt Desire is her top desire,\n\\C[11]her enemies' Accuracy will be lowered\n\\C[0]because they're too focused on chasing \nher swaying meaty hips.";
const DesireTooltipsCockDesireTopBuffSP = "\\I[56]When Karryn's Cock Desire is her top desire,\n\\C[27]her Cock Desire Gain Rate will be increased\n\\C[0]because she can't stop thinking about cock.";

const VirginityTextSP = "Sex Status";  //currently unused
const VirginityYesSP = "\\C[13]Virgin\\C[0]";
const VirginityNoSP = "\\C[27]Non-virgin\\C[0]";
const VirginActorTextSP = "First Time With:"; //currently unused
const VirginActorNoneSP = "---------"; //currently unused

const ResistNameSP = " Resist";
const SafeModeSP = "Safe Mode"; //currently unused
const ReplayModeSP = "Replay Mode"; //currently unused
const PixelMovementSP = "Pixel Movement"; //currently unused
const BattleLogSP = "History"; 
const BattleStatusSP = "Status"; 
const EdictsSP = "Edicts";
const EdictCostSP = "Edict Cost";
const QuestLogSP = "Radio"; //currently unused
const GlossarySP = "Notes";//currently unused
const PassiveObtainedOnSP = "Obtained on Day %1";
const StaminaRecoverySP = "\\C[11]%1's stamina is restored by %2 points!";
const EnergyRecoverySP = "\\C[4]%1's energy is restored by %2 points!";

const KarrynTauntMessageSP = "Karryn starts taunting!";
const KarrynFlauntMessageSP = "Karryn starts flaunting!";

const AronCallLizardmanFailSP = "However, no one showed up...!";

const ActorGainPleasureSP = "\\C[27]%1's pleasure increases by %2!";
const ActorGainPleasure_SightSP = "\\C[27]%1's pleasure increases by %2 just from being looked at!";
const ActorGainPleasure_ToySP = "\\C[27]%1's pleasure increases by %2 from the toys!";

const PleasurePercentTextSP = " percent";

const EnemyGainPleasure_Percent_SP = "\\C[1]%1 is %2 closer to ejaculating!";
const EnemyGainPleasure_Value_SP = "\\C[1]%1's pleasure increases by %2!";
const ActorSingleOrgasmSP = "\\C[31]%1 loses %2 points of energy!";
const ActorMultipleOrgasmSP = "\\C[1]%1 has %3 consecutive orgasms! \\C[31]%1 loses %2 points of energy!";

const EjaculatePussySP = "\\C[27]%1 invades %2's womb with \\C[1]%3 ml of semen!";
const EjaculateAnalSP = "\\C[27]%1 fills up %2's ass with \\C[1]%3 ml of semen!";
const EjaculateMouthSP = "\\C[27]%1 coats %2's throat with \\C[1]%3 ml of semen!";

const BukkakeFaceSP = "\\C[27]%1 covers %2's face with \\C[1]%3 ml of semen!";
const BukkakeBoobsSP = "\\C[27]%1 cums on %2's boobs with \\C[1]%3 ml of semen!";
const BukkakeArmsSP = "\\C[27]%1 cums on %2's arms with \\C[1]%3 ml of semen!";
const BukkakeLegsSP = "\\C[27]%1 cums on %2's legs with \\C[1]%3 ml of semen!";
const BukkakeButtSP = "\\C[27]%1 cums on %2's butt with \\C[1]%3 ml of semen!";

const ActorFirstKissMouthSP = "\\C[18]Karryn just had her first kiss!!!";
const ActorFirstKissCockSP = "\\C[18]Oh no! Karryn's first kiss was with someone's dick!!!";
const ActorFirstKissAnusSP = "\\C[18]Oh no! Karryn's first kiss was with someone's anus!!!";
const ActorLostPussyVirginitySP = "\\C[18]Karryn's hymen broke!!!!";
const ActorLostAnalVirginitySP = "\\C[18]Karryn lost her anal virginity!!";

const InvasionNoiseLevelOneSP = "\\C[8]Faint noises can be heard outside.";
const InvasionNoiseLevelTwoSP = "\\C[7]Faint movement can be heard outside.";
const InvasionNoiseLevelThreeSP = "\\C[2]Inaudible talking can be heard outside.";
const InvasionNoiseLevelFourSP = "\\C[10]Someone is shouting outside.";
const InvasionBattleStartSP = "A bunch of people barge into the room!";

const MasturbateBattleTouchClitSP = "Karryn starts rubbing her clitoris!";
const MasturbateBattleTouchPussySP = "Karryn starts rubbing her pussy lips!";
const MasturbateBattleTouchAnalSP = "Karryn starts touching her anus!";
const MasturbateBattleTouchBoobsSP = "Karryn starts squeezing her boobs!";
const MasturbateBattleTouchNipplesSP = "Karryn starts pinching her nipples!";

const MasturbateBattleFingerPussySP = "Karryn starts fingering her pussy!";
const MasturbateBattleFingerAnalSP = "Karryn starts fingering her anus!";

const MasturbateBattleSuckFingersSP = "Karryn starts sucking on her fingers!";
const MasturbateBattleSuckNipplesSP = "Karryn starts sucking on her own nipples!";

const SkillDescriptionNoValidTargetsSP = "There is no valid target.";
const SkillDescriptionNotEnoughDesireSP = "Not enough desire to do this.";
const SkillDescriptionCantDoThisSP = "Can't use this skill right now.";
const SkillDescriptionHandsBusySP = "Need a free hand to do this.";
const SkillDescriptionNotWetSP = "Not wet enough to do this.";

const TitleDescriptionFirstTimeTitleEquipSP = "\\C[0] (Equip once to get effects for this playthrough)";

const CharmEquipReqTextSP = "Charm Requirement: ";
const GrowthRateTextSP = " Growth";

const RemResultsVictorySP = "Battle Victory!";
const RemResultsDefeatSP = "Battle Defeat...";
const RemResultsAbortedSP = "Battle Aborted.";
const RemResultsMasturbateBattleNoneSP = "Karryn is tired...";
const RemResultsMasturbateBattleSingleSP = "Karryn came!";
const RemResultsMasturbateBattlePluralSP = "Karryn came %1 times!";
const RemResultsJobBattleEndSP = "Karryn's shift has ended.";
const RemResultsBitchEndBattleEndSP = "HAPPY END";
const RemResultsEndlessBattleNormalSP = "Final Result: Endless Prison Wave %1";
const RemResultsEndlessBattleHellSP = "Final Result: Endless Hell Wave %1";
const RemResultsGainedExpSP = "EXP Gained";
const RemResultsLevelUpSP = "LEVEL UP!";
const RemResultsOrderIncreaseSP = "\\I[408]\\C[11]Restored %1 Prison Order!";
const RemResultsOrderDecreaseSP = "\\I[409]\\C[10]Lost %1 Prison Order...";
const RemResultsFundingIncreaseSP = "\\I[400]\\C[11]Gained %1 G!";
const RemResultsFundingDecreaseSP = "\\I[401]\\C[10]Lost %1 G...";
const RemResultsFatigueIncreaseSP = "\\I[389]\\C[10]Fatigue increased by %1%...";
const RemResultsFatigueDecreaseSP = "\\I[388]\\C[11]Fatigue decreased by %1%!";
const RemResultsItemDropSP = "\\I[96]\\C[11]Gained new item %1!";

const CockinessIncreasedTextSP = "\\I[354]\\C[11]Cockiness increased to %1%!";
const CockinessDecreasedTextSP = "\\I[489]\\C[10]Cockiness has fallen to %1%...";
const CockinessResetSP = "\\I[489]\\C[10]Cockiness reset to zero...";
const CockinessMaxxedOutSP = "\\I[354]\\C[11]Cockiness is at 100%!";

const RemResultsSubduedWithAttackSP = "\\I[74]\\C[11]Subdued %1 %2 physically!";
const RemResultsSubduedSexuallySP = "\\I[43]\\C[27]Subdued %1 %2 sexually!";
const RemResultsSubduedWithAttackAndSexuallySP = "\\I[291]\\C[11]Subdued %1 %2 physically and \\C[27]%3 %4 sexually\\C[11]!";
const RemResultsKarrynOrgasmSingularSP = "\\I[99]\\C[27]Orgasmed once!";
const RemResultsKarrynOrgasmPluralSP = "\\I[99]\\C[27]Orgasmed %1 times!";
const RemResultsKarrynMasturbatedInBattleSingularSP = "\\I[46]\\C[27]Masturbated during battle once!";
const RemResultsKarrynMasturbatedInBattlePluralSP = "\\I[46]\\C[27]Masturbated during battle %1 times!";
const RemResultsKarrynKissSP = "\\I[288]\\C[27]Kissed %1 %2!";
const RemResultsKarrynHandjobSP = "\\I[289]\\C[27]Gave handjobs to %1 %2!";
const RemResultsKarrynBlowjobSP = "\\I[294]\\C[27]Gave blowjobs to %1 %2!";
const RemResultsKarrynTitjobSP = "\\I[221]\\C[27]Gave titjobs to %1 %2!";
const RemResultsKarrynFootjobSP = "\\I[219]\\C[27]Gave footjobs to %1 %2!";
const RemResultsKarrynRimjobSP = "\\I[299]\\C[27]Gave rimjobs to %1 %2!";
const RemResultsKarrynVaginalSexSP = "\\I[295]\\C[27]Had vaginal sex with %1 %2!";
const RemResultsKarrynAnalSexSP = "\\I[296]\\C[27]Had anal sex with %1 %2!";


const RemParamLevelGainedSingularSP = "\\C[16]%3Gained %1 %2 Level!";
const RemParamLevelGainedPluralSP = "\\C[16]%3Gained %1 %2 Levels!!";

const RemWardenLevelRequireSingularSP = "\\C[8]\\I[25]%1 more stat level until the next Warden Level!";
const RemWardenLevelRequirePluralSP = "\\C[8]\\I[25]%1 more stat levels until the next Warden Level!";
const RemWardenLevelUpSP = "\\I[352]\\C[11]LEVEL UP!!! \\C[16]%1 has reached Warden Level %2!!";
const RemWardenLevelLimitReachedSP = "\\I[353]\\C[8]%1 has reached the Warden Level Limit and will not gain any more stat levels.";

const RemResultsPassivesTitleSP = "New Passives Unlocked!!";
const RemResultsTooManyPassivesUnlockedSP = "\\C[8]\\I[25]Plus %1 more other Passives!";

const RemDailyReportDayCountSP = "\\#\\{\\{Day %1: Daily Report\\}\\}";
const RemDailyReportAnarchyNoLimitSP = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0].";
const RemDailyReportAnarchyLimitBefore_singularSP = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0]. Control might be further decreased starting tomorrow from unrest!";
const RemDailyReportAnarchyLimitBefore_pluralSP = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0]. Control might further decrease in about %3 days from unrest!";
const RemDailyReportAnarchyPastLimitSP = "\\I[377]Día %2 of Level %1 being in Anarchy. Control is further decreased by \\C[18]-%3\\C[0] due to unrest!";
const RemDailyReportRiot_NewSP = "\\I[407]Level %1 has started \\C[18]RIOTING\\C[0]!! Order has decreased by \\C[18]-%2\\C[0]!";
const RemDailyReportRiot_OldSP = "\\I[407]Level %1 has been \\C[18]RIOTING\\C[0] for %2 days! Control is further decreased by \\C[18]-%3\\C[0]!";
const RemDailyReportOrderChange_PositiveSP = "\\I[408]Order has risen to %1.";
const RemDailyReportOrderChange_NegativeSP = "\\I[409]Order has fallen to %1.";
const RemDailyReportOrderChange_NeutralSP = "\\I[408]Order has remained the same at %1.";
const RemDailyReportFundingChange_PositiveSP = "\\I[410]Funds have increased to \\C[11]$%1\\C[0].";
const RemDailyReportFundingChange_NegativeSP = "\\I[411]Funds have decreased to \\C[2]$%1\\C[0].";
const RemDailyReportBankruptcySP = "\\I[411]The prison is currently \\C[2]BANKRUPTED\\C[0]!!! Control is further decreased by \\C[18]-%1\\C[0]!";
const RemDailyReportEdictPoints_SingularSP = "\\I[364]%1 Edict Point is available today.";
const RemDailyReportEdictPoints_PluralSP = "\\I[364]%1 Edict Points are available today.";
const RemDailyReportBarRep_AlmostDecaySP = "\\I[188]Bar Reputation is about to \\C[8]decay\\C[0]. Work as a waitress today to prevent it.";
const RemDailyReportBarRep_DecayedSP = "\\I[188]\\C[8]Bar Reputation has decayed by -1.\\C[0]";
const RemDailyReportVisitorRep_AlmostDecaySP = "\\I[159]Visitor Center Reputation is about to \\C[8]decay\\C[0]. Work as a receptionist today to prevent it.";
const RemDailyReportVisitorRep_DecayedSP = "\\I[159]\\C[8]Visitor Center Reputation has decayed by -1.\\C[0]";
const RemDailyReportToiletRep_AlmostDecaySP = "\\I[234]Bathroom Reputation is about to \\C[8]decay\\C[0]. Rest at the toilet today to prevent it.";
const RemDailyReportToiletRep_DecayedSP = "\\I[234]\\C[8]Bathroom Reputation has decayed by -1.\\C[0]";
const RemDailyReportStripClubRep_AlmostDecaySP = "\\I[21]Strip Club Reputation is about to \\C[8]decay\\C[0]. Work as a stripper today to prevent it.";
const RemDailyReportStripClubRep_DecayedSP = "\\I[21]\\C[8]Strip Club Reputation has decayed by -1.\\C[0]";
const RemDailyReportGymRep_AlmostDecaySP = "\\I[159]Gym Reputation is about to \\C[8]decay\\C[0]. Work as a trainer today to prevent it.";
const RemDailyReportGymRep_DecayedSP = "\\I[159]\\C[8]Gym Reputation has decayed by -1.\\C[0]";

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


const RemYanflyBattleCoreUserSP = "User";
const RemYanflyBattleCoreAllySP = "Ally";
const RemYanflyBattleCoreAlliesSP = "Allies";
const RemYanflyBattleCoreEnemySP = "Enemy";
const RemYanflyBattleCoreEnemiesSP = "Enemies";
const RemYanflyBattleCoreAllTargetsSP = "All %1";
const RemYanflyBattleCoreRandomTargetsSP = "%2 Random %1";

const RemYanflyRemoveSP = "Remove";
const RemYanflyEmptySP = "<Empty>";

//Options Main
const RemYanflyOptions_All_SP = "\\I[272]All";
const RemYanflyOptions_All_Help_SP = "A list of all of the game's settings.";
const RemYanflyOptions_General_SP = "\\I[273]General";
const RemYanflyOptions_General_Help_SP = "General settings that alter the way the game behaves.";
const RemYanflyOptions_Audio_SP = "\\I[274]Audio";
const RemYanflyOptions_Audio_Help_SP = "Adjust the audio settings for the game.";
const RemYanflyOptions_Visual_SP = "\\I[276]Visual";
const RemYanflyOptions_Visual_Help_SP = "Settings that adjust the visual properties of the game.";
const RemYanflyOptions_Controls_SP = "\\I[280]Controls";
const RemYanflyOptions_Controls_Help_SP = "Change the way you can control the game.\nPress a button on your gamepad in order to access the Gamepad Config menu.";
const RemYanflyOptions_Cheats_SP = "\\I[250]Cheats";
const RemYanflyOptions_Cheats_Help_SP = "Cheats are only activated during Secretary Mode.\nUse these cheats if you like playing in Secretary Mode\nbut prefer certain aspects of the game to be more difficult.";
const RemYanflyOptions_Exit_SP = "\\I[254]Exit";
const RemYanflyOptions_Exit_Help_SP = "Exit the Options Menu.";


const RemYanflyOptions_Hair_SP = "\\I[586]Cosmetic";
const RemYanflyOptions_Hair_Help_SP = "Modify Karryn's appearance.\nCertain options require the Stray Pubes DLC.";

const RemYanflyOptions_Lovense_SP = "\\I[587]Lovense";
const RemYanflyOptions_Lovense_Help_SP = "Settings related to Lovense sex toys integration.\nPlease practice safety handling and good hygiene when using sex toys!\nThe ALT key on the keyboard can be used as an emergency STOP button for Lovense toys.";

//Options General
const RemYanflyOptions_Language_SP = "\\i[275]Text Language";
const RemYanflyOptions_Language_Help_SP = "Change the text language here.";
const RemYanflyOptions_VoiceLanguage_SP = "\\i[275]Voice Language";
const RemYanflyOptions_VoiceLanguage_Help_SP = "Change the voice language here.";
const RemYanflyOptions_AlwaysDash_SP = "\\i[273]Always Dash";
const RemYanflyOptions_AlwaysDash_Help_SP = "Karryn will normally walk when this option is OFF.\nKarryn will normally dash when this option is ON.\nHolding the SHIFT key/button will switch between walking and dashing.";
const RemYanflyOptions_MessageSpeed_SP = "\\i[273]Message Speed";
const RemYanflyOptions_MessageSpeed_Help_SP = "Changes the speed text is displayed during messages.";
const RemYanflyOptions_MessageSpeed_NoWait_SP = "No Wait";
const RemYanflyOptions_CommandRemember_SP = "\\i[273]Command Remember";
const RemYanflyOptions_CommandRemember_Help_SP = "The game remembers the last Mental and Action Phase skill used.";

const RemYanflyOptions_Battlelog_Duration_SP = "\\i[273]Battlelog Duration";
const RemYanflyOptions_Battlelog_Duration_Help_SP = "Changes how long battlelog messages stay on the screen.";
const RemYanflyOptions_Battlelog_Duration_Zero_SP = "Very Short";
const RemYanflyOptions_Battlelog_Duration_One_SP = "Short";
const RemYanflyOptions_Battlelog_Duration_Two_SP = "Default";
const RemYanflyOptions_Battlelog_Duration_Three_SP = "Long";
const RemYanflyOptions_Battlelog_Duration_Four_SP = "Very Long";

const RemYanflyOptions_Battlelog_Fontsize_SP = "\\i[273]Battlelog Font Size";
const RemYanflyOptions_Battlelog_Fontsize_Help_SP = "Changes the font size for battlelog messages.";
const RemYanflyOptions_Battlelog_Fontsize_Zero_SP = "Smallest";
const RemYanflyOptions_Battlelog_Fontsize_One_SP = "Smaller";
const RemYanflyOptions_Battlelog_Fontsize_Two_SP = "Default";
const RemYanflyOptions_Battlelog_Fontsize_Three_SP = "Bigger";
const RemYanflyOptions_Battlelog_Fontsize_Four_SP = "Biggest";

const RemYanflyOptions_MaleDialogueAppear_SP = "\\i[273]Enemy Battle Dialogue";
const RemYanflyOptions_MaleDialogueAppear_Help_SP = "Changes how likely enemies will make a comment while using a sexual skill.\nNote there are some exceptions where enemies will always talk regardless of this setting.";
const RemYanflyOptions_MaleDialogueAppear_Zero_SP = "Silence";
const RemYanflyOptions_MaleDialogueAppear_One_SP = "Rarely";
const RemYanflyOptions_MaleDialogueAppear_Two_SP = "Sometimes";
const RemYanflyOptions_MaleDialogueAppear_Three_SP = "Often (Default)";
const RemYanflyOptions_MaleDialogueAppear_Four_SP = "Talkative";

const RemYanflyOptions_KarrynLinesPrompt_SP = "\\i[273]Karryn Dialogue Pause";
const RemYanflyOptions_KarrynLinesPrompt_Help_SP = "The battle is paused after Karryn speaks until the confirm key is pressed.\nTurning this option OFF will skip this pause for most of Karryn's battle dialogues.";
const RemYanflyOptions_Disable_Rimjobs_SP = "\\i[273]Disable Rimjobs";
const RemYanflyOptions_Disable_Rimjobs_Help_SP = "Prevents all rimjob content from occuring while this is option is on.\nNote that this game's progression and full content is designed with rimjobs in mind.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_Footjobs_SP = "\\i[273]Disable Footjobs";
const RemYanflyOptions_Disable_Footjobs_Help_SP = "Prevents all footjob content from occuring while this is option is on.\nNote that this game's progression and full content is designed with footjobs in mind.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_Smegma_SP = "\\i[273]Disable Smegma";
const RemYanflyOptions_Disable_Smegma_Help_SP = "Prevents all mentions and descriptions of smegma in battle dialogs.\nNote that while this doesn't affect gameplay, it would reduce the variance in dialog.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_FeraMouth_SP = "\\i[273]Disable Blowjob Mouths";
const RemYanflyOptions_Disable_FeraMouth_Help_SP = "Prevents exaggerated slutty blowjob mouths from appearing.\nNote that while this doesn't affect gameplay, it would reduce blowjob facial variances.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";

const RemYanflyOptions_DisplayPleasureAsPercent_SP = "\\i[273]Display Pleasure As Percentage";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_SP = "When this option is turned ON, pleasure values will be displayed as a percentage based \non the amount of pleasure needed to have an orgasm.\nWhen this option is turned OFF, pleasure values will be displayed as normal numbers.";

const RemYanflyOptions_ShorterDefeatBattles_SP = "\\i[273]Shorter Defeated Battles";
const RemYanflyOptions_ShorterDefeatBattles_Help_SP = "\\}Normally Defeated Battles (the battles after Karryn is defeated) are over only after all enemies are satisfied.\n\\{Turning this option ON will allow the battle to also end after Karryn is exhausted.\nPrisoner Mode ignores this option, this is always OFF in Prisoner Mode."

//Options Audio
const RemYanflyOptions_MasterVolume_SP = "\\i[274]Master Volume";
const RemYanflyOptions_MasterVolume_Help_SP = "Adjusts the overall volume of the game.";
const RemYanflyOptions_BGMVolume_SP = "\\i[274]Music Volume";
const RemYanflyOptions_BGMVolume_Help_SP = "Adjusts the volume of the music.";
const RemYanflyOptions_BGSVolume_SP = "\\i[274]BGS Volume";
const RemYanflyOptions_BGSVolume_Help_SP = "Adjusts the volume of the background sound effects.";
const RemYanflyOptions_MEVolume_SP = "\\i[274]ME Volume";
const RemYanflyOptions_MEVolume_Help_SP = "Adjusts the volume of the melody effects such as fanfares.";
const RemYanflyOptions_SEVolume_SP = "\\i[274]Sound Volume";
const RemYanflyOptions_SEVolume_Help_SP = "Adjusts the volume of the sound effects.";
const RemYanflyOptions_VoiceVolume_SP = "\\i[274]Voice Volume";
const RemYanflyOptions_VoiceVolume_Help_SP = "Adjusts the volume of Karryn's spoken dialogue.";
const RemYanflyOptions_MoansVolume_SP = "\\i[274]Moan Volume";
const RemYanflyOptions_MoansVolume_Help_SP = "Adjusts the volume of Karryn's moans.";
const RemYanflyOptions_MaleVolume_SP = "\\i[274]Male Volume";
const RemYanflyOptions_MaleVolume_Help_SP = "Adjusts the volume of male sounds like grunts and laughter.";
const RemYanflyOptions_KeepVoicePlayback_SP = "\\i[274]Keep Voice Playback";
const RemYanflyOptions_KeepVoicePlayback_Help_SP = "Normally any voice being played gets cut off after you hit the confirm key.\nTurning this option ON will have voices keep playing until a new voice is played."
const RemYanflyOptions_AutoContinueAfterVoice_SP = "\\i[274]Auto Continue After Voice";
const RemYanflyOptions_AutoContinueAfterVoice_Help_SP = "Turning this option ON will automatically continue the battle after Karryn's voice ends.\nThis option requires Karryn Dialogue Pause to also be turned on to work."

//Options Visual
const RemYanflyOptions_WindowToneRed_SP = "\\i[277]Window Tone: Red";
const RemYanflyOptions_WindowToneRed_Help_SP = "Changes the window tone's \\c[18]red\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.\nNote: This setting is save file specific and can not be changed in the title screen.";
const RemYanflyOptions_WindowToneGreen_SP = "\\i[278]Window Tone: Green";
const RemYanflyOptions_WindowToneGreen_Help_SP = "Changes the window tone's \\c[29]green\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.\nNote: Note: This setting is save file specific and can not be changed in the title screen.";
const RemYanflyOptions_WindowToneBlue_SP = "\\i[279]Window Tone: Blue";
const RemYanflyOptions_WindowToneBlue_Help_SP = "Changes the window tone's \\c[14]blue\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.\nNote: Note: This setting is save file specific and can not be changed in the title screen.";
const RemYanflyOptions_FasterBattleDialogue_SP = "\\i[276]Fast Battle Dialogues";
const RemYanflyOptions_FasterBattleDialogue_Help_SP = "Turning this option ON will make battle dialogue go faster.";
const RemYanflyOptions_FasterBattleCutins_SP = "\\i[276]Simple Battle Cut-ins";
const RemYanflyOptions_FasterBattleCutins_Help_SP = "Turning this option ON will make battle cut-ins go faster and turn off the cut-in animations.\nTurn this option ON if you're experiencing heavy slowdown during cut-ins.";
const RemYanflyOptions_SmootherBattleCutinLoading_SP = "\\i[276]Smoother Battle Cut-in Loading";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_SP = "\\}\\}This is an option for stronger PCs that will make battle cut-ins load in smoother at the cost of much longer initial boot up time for the game.\n\\{\\{Please keep this option OFF if your initial boot up time is already longer than twenty seconds or if your game often crashes.\nPlease restart your game for this option to take effect.";
const RemYanflyOptions_DisableBattleCutins_SP = "\\i[276]Disable Battle Cut-ins";
const RemYanflyOptions_DisableBattleCutins_Help_SP = "Turning this option ON will completely disable battle cut-ins.\nThe intended visual experience is to play and enjoy the game with battle cut-ins appearing.\nThis option should only be used as a last resort if cut-ins are causing serious FPS issues.";
const RemYanflyOptions_SmootherCGLoading_SP = "\\i[276]Smoother CG Loading";
const RemYanflyOptions_SmootherCGLoading_Help_SP = "\\}\\}This is an option for stronger PCs that will make CGs load in smoother at the cost of much longer initial boot up time for the game.\nPlease keep this option OFF if your initial boot up time is already longer than twenty seconds or if your game often crashes.\n\\{Please restart your game for this option to take effect.";
const RemYanflyOptions_SortPassivesAscending_SP = "\\i[276]Sort Passives Ascending";
const RemYanflyOptions_SortPassivesAscending_Help_SP = "Passives are visually sorted in the Passives screen by the date they were obtained.\nON: They will be sorted with the oldest ones on top.\nOFF: They will sorted with the newest ones on top.";
const RemYanflyOptions_SynchFPS_SP = "\\i[273]Force 60 FPS";
const RemYanflyOptions_SynchFPS_Help_SP = "\\}Please keep this option turned ON if your monitor is above 60Hz so that the game will properly cap at 60 FPS.\n\\{Turn this option OFF if your game is running way below 60 FPS or your monitor is 60Hz or less.\nPressing F2 will display the game's current FPS.";
const RemYanflyOptions_LightingEffects_SP = "\\i[276]Map Lighting Effects";
const RemYanflyOptions_LightingEffects_Help_SP = "Map lighting effects include the effects from light sources such as torches.\nTurning this OFF will remove those effects and help improve game performance if\nyour game is experiencing slow downs in areas with map lighting effects." 
const RemYanflyOptions_MapEffects_SP = "\\i[276]Animated Map Effects";
const RemYanflyOptions_MapEffects_Help_SP = "Animated map effects include fogs and mists.\nTurning this OFF will remove those effects and help improve game performance if\nyour game is experiencing slow downs in areas with animated map effects." 
const RemYanflyOptions_DisableFlashing_SP = "\\i[276]Disable Screen Flashes";
const RemYanflyOptions_DisableFlashing_Help_SP = "Turning this option ON will disable full screen flashes.\nUse this option if you are sensitive to flashes or are getting eye strain from the flashes." 

const RemYanflyOptions_ShowSexualDamagePopup_SP = "\\i[276]Toggle Karryn Sexual Damage Popup";
const RemYanflyOptions_ShowSexualDamagePopup_Help_SP = "\\}Turn this option ON to have damage numbers from sexual attacks popup over Karryn's body.\nTurn this option OFF to hide the damage numbers from sexual attacks over Karryn's body.\nInformation about sexual attacks will still appear in the battle log.";

const RemYanflyOptions_EdictsOutlineColor_Obtainable_SP = "\\i[276]Edicts Outline Color: Obtainable";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_SP = "This option changes the color of the outlines in the Edicts screen\nfor the Edicts that Karryn can enact right now.";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_SP = "\\i[276]Edicts Outline Color: Met Req";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_SP = "This option changes the color of the outlines in the Edicts screen\nfor the Edicts that Karryn meet the requirements for but can not enact right now.";
const RemYanflyOptions_EdictsOutlineColor_NoReq_SP = "\\i[276]Edicts Outline Color: No Req";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_SP = "This option changes the color of the outlines in the Edicts screen\nfor the Edicts that Karryn does not meet the requirements for.";

const RemYanflyOptions_EdictsOutlineColorName_Green_SP = "Green";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_SP = "Light Blue";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_SP = "Yellow";
const RemYanflyOptions_EdictsOutlineColorName_Purple_SP = "Purple";
const RemYanflyOptions_EdictsOutlineColorName_Gray_SP = "Gray";
const RemYanflyOptions_EdictsOutlineColorName_Black_SP = "Black";
const RemYanflyOptions_EdictsOutlineColorName_Red_SP = "Red";

//Options Controls
const RemYanflyOptions_GamepadControl_SP = "\\i[281]Gamepad Config";
const RemYanflyOptions_GamepadControl_Help_SP = "Configure the gamepad button settings.";
const RemYanflyOptions_KeyboardControl_SP = "\\i[280]Keyboard Config";
const RemYanflyOptions_KeyboardControl_Help_SP = "Configure the keyboard keys settings.";
const RemYanflyOptions_CancelSkipMentalPhase_SP = "\\I[280]Cancel Skips Mental Phase";
const RemYanflyOptions_CancelSkipMentalPhase_Help_SP = "Turning this option ON will cause Mental Phase to end automatically when pressing \nthe cancel key/button or right clicking with the mouse.";

const RemYanflyOptions_Fullscreen_SP = "\\i[273]Toggle Fullscreen";
const RemYanflyOptions_Fullscreen_Help_SP = "Switch between Window Mode and Fullscreen Mode.\nPressing F4 or ALT+ENTER during gameplay also does the same thing.";

const RemYanflyGamepadButtonNameSP = "Button %1";
const RemYanflyGamepadOkButtonNameSP = "OK / Interact";
const RemYanflyGamepadOkButtonHelpSP = "Used to accept command actions and interact with objects and people.";
const RemYanflyGamepadCancelButtonNameSP = "Cancel";
const RemYanflyGamepadCancelButtonHelpSP = "Used to cancel menu actions.";
const RemYanflyGamepadShiftButtonNameSP = "Shift";
const RemYanflyGamepadShiftButtonHelpSP = "Hold this button to dash on the map or hide text.";
const RemYanflyGamepadMenuButtonNameSP = "Menu";
const RemYanflyGamepadMenuButtonHelpSP = "Used to open the Main Menu.";
const RemYanflyGamepadPageUpButtonNameSP = "Shoulder Left / Backlog";
const RemYanflyGamepadPageUpButtonHelpSP = "Used to scroll through menus and items, and also open the message backlog.";
const RemYanflyGamepadPageDownButtonNameSP = "Shoulder Right / Speed Up";
const RemYanflyGamepadPageDownButtonHelpSP = "Used to scroll through menus and items, and also speed up text and battle.";
const RemYanflyGamepadResetDefaultNameSP = "Reset to Default";
const RemYanflyGamepadResetDefaultHelpSP = "Returns your controller to default settings.";
const RemYanflyGamepadFinishConfigNameSP = "Finish Configuration";
const RemYanflyGamepadFinishConfigHelpSP = "Are you done configuring your gamepad?";

const RemYanflyKeyboardHelpSP = "Change the configuration of this key?";
const RemYanflyKeyboardDefaultLayoutTextSP = "Default Keyboard Layout";
const RemYanflyKeyboardDefaultLayoutHelpSP = "Reverts your keyboard setting to the default setup.";
const RemYanflyKeyboardWASDTextSP = "WASD Movement Layout";
const RemYanflyKeyboardWASDHelpSP = "Changes your keyboard to WASD movement.";
const RemYanflyKeyboardFinishConfigTextSP = "Finish Configuration";
const RemYanflyKeyboardFinishConfigHelpSP = "Are you done configuring your keyboard?";
const RemYanflyKeyboardClearTextSP = "Clear";
const RemYanflyKeyboardOKKeySP = "OK";
const RemYanflyKeyboardOKTextSP = "OK / Interact";
const RemYanflyKeyboardEscapeKeySP = "Cancel/Menu";
const RemYanflyKeyboardEscapeTextSP = "Cancel / Menu";
const RemYanflyKeyboardCancelKeySP = "Cancel";
const RemYanflyKeyboardCancelTextSP = "Cancel";
const RemYanflyKeyboardMenuKeySP = "Menu";
const RemYanflyKeyboardMenuTextSP = "Menu";
const RemYanflyKeyboardShiftKeySP = "Shift";
const RemYanflyKeyboardShiftTextSP = "Shift";
const RemYanflyKeyboardPageUpKeySP = "PgUp";
const RemYanflyKeyboardPageUpTextSP = "Page Up / Backlog";
const RemYanflyKeyboardPageDownKeySP = "PgDn";
const RemYanflyKeyboardPageDownTextSP = "Page Down";
const RemYanflyKeyboardLeftKeySP = "←";
const RemYanflyKeyboardLeftTextSP = "Left";
const RemYanflyKeyboardUpKeySP = "↑";
const RemYanflyKeyboardUpTextSP = "Up";
const RemYanflyKeyboardRightKeySP = "→";
const RemYanflyKeyboardRightTextSP = "Right";
const RemYanflyKeyboardDownKeySP = "↓";
const RemYanflyKeyboardDownTextSP = "Down";


//Options Cheats
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_SP = "\\i[56]\\C[27]Hot Coffee";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_SP = "Karryn unlocks new Passives twice as fast.\nFor people who want to see Karryn turn into a slut faster.\nNote: Cheats only work in Secretary Mode.";

const RemYanflyOptions_Cheats_ActorNoPassiveGain_SP = "\\i[56]\\C[25]Warm Coffee";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_SP = "Karryn no longer unlocks any more Passives.\nFor people who want to keep Karryn the way she currently is.\nNote: This special cheat only works during Free Play Mode after certain Endings.";

const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_SP = "\\i[429]\\C[14]WhosYourDaddy";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_SP = "Enemies deal double the amount of stamina damage to Karryn.\nFor people who want to see Karryn be less invincible.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_SP = "\\i[429]\\C[14]iddqd";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_SP = "Enemies deal triple the amount of stamina damage to Karryn.\nFor people who want to see Karryn fall down from a few hits.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_SP = "\\i[387]\\C[1]BigDaddy";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_SP = "Enemies deal double the amount of pleasure damage to Karryn.\nFor people who want to see Karryn succumb to pleasure faster.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_SP = "\\i[387]\\C[1]there is no cow level";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_SP = "Enemies deal triple the amount of pleasure damage to Karryn.\nFor people who want to turn Karryn into a puddle.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_SP = "\\i[387]\\C[1]godmode";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_SP = "Enemies take twice as much pleasure before they will cum.\nFor people who want the men to stop premature ejaculating to Karryn.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_SP = "\\i[385]\\C[2]stormbilly";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_SP = "Enemies will always act every turn.\nFor people who don't want enemies to skip their turn.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_SP = "\\i[473]\\C[29]pepperoni pizza";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_SP = "Karryn only regenerates half as much stamina.\nFor people who want to see Karryn get gradually worn down.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_SP = "\\i[473]\\C[29]Thereisnospoon";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_SP = "Karryn only regenerates one-third as much stamina.\nFor people who want Karryn to regenerate much less.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorNoEvasion_SP = "\\i[427]\\C[30]Jack be nimble";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_SP = "Karryn can no longer evade.\nFor people who want Karryn to take every attack head on.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorHalfExpRate_SP = "\\i[361]\\C[30]hoyohoyo";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_SP = "Karryn's experience rate is cut in half.\nFor people who want Karryn to take longer to level up.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_LessControlFive_SP = "\\i[377]\\C[10]ROSEBUD";
const RemYanflyOptions_Cheats_LessControlFive_Help_SP = "Lowers the prison's Control by 5.\nFor people who want to see more lower Order stuff.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_LessControlTen_SP = "\\i[377]\\C[10]showracemenu";
const RemYanflyOptions_Cheats_LessControlTen_Help_SP = "Lowers the prison's Control by 10.\nFor people who want to quickly drop the prison's Order.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsOne_SP = "\\i[407]\\C[7]Greedisgood";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_SP = "Prison Level One is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsTwo_SP = "\\i[407]\\C[7]black sheep wall";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_SP = "Prison Level Two is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsThree_SP = "\\i[407]\\C[7]lumberjack";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_SP = "Prison Level Three is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsFour_SP = "\\i[407]\\C[7]allyourbasearebelongtous";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_SP = "Prison Level Four is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_WaitressLog_SP = "\\i[282]\\C[17]KeyserSoze";
const RemYanflyOptions_Cheats_WaitressLog_Help_SP = "Enables access to the History log during the Waitress side job.\nFor people who don't want to memorize orders.\nNote: Cheats only work in Secretary Mode.";

const RemYanflyOptions_Cheats_WaitressMemory_SP = "\\i[282]\\C[17]KeyserSoze";
const RemYanflyOptions_Cheats_WaitressMemory_Help_SP = "Removes the icon for the drink bar patrons ordered.\nFor people who want to memorize orders.\nNote: This cheat works on all modes.";

const RemYanflyOptions_Cheats_NoAutoSave_SP = "\\i[282]The \\C[18]K*n*mi\\C[0] Code";
const RemYanflyOptions_Cheats_NoAutoSave_Help_SP = "Disables autosave.\nJust make sure to save often!\nNote: Cheats only work in Secretary Mode.";

const RemYanflyOptions_BoobsSize_SP = "\\i[58]Karryn's Boobs Size";
const RemYanflyOptions_BoobsSize_Help_SP = "Changing Karryn's boobs size is cosmetic only and has no gameplay effect.";
const RemYanflyOptions_BoobsSize_One_SP = "K Cup (Huge) (Default)";
const RemYanflyOptions_BoobsSize_Two_SP = "H Cup (Big)";
const RemYanflyOptions_BoobsSize_Three_SP = "P Cup (Massive)";

const RemYanflyOptions_HairColor_SP = "\\i[594]Karryn's Hair Color";
const RemYanflyOptions_HairColor_Help_SP = "Changing Karryn's hair color is cosmetic only and has no gameplay effect.\nNote that dialogues, cut-ins and certain sprites will still refer to Karryn's hair color as purple.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_HairColor_One_SP = "Purple (Default)";
const RemYanflyOptions_HairColor_Two_SP = "Blond";
const RemYanflyOptions_HairColor_Three_SP = "Black";

const RemYanflyOptions_DisplayPubicHair_SP = "\\i[595]Toggle Karryn's Pubic Hair";
const RemYanflyOptions_DisplayPubicHair_Help_SP = "Turn this option ON for Karryn to have pubic hair.\nKarryn having pubic hair or not is cosmetic only and has no gameplay effect.";

const RemYanflyOptions_PubicColor_SP = "\\i[595]Karryn's Pubic Color";
const RemYanflyOptions_PubicColor_Help_SP = "Changing Karryn's pubic color is cosmetic only and has no gameplay effect.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_PubicColor_Zero_SP = "Same as Hair Color (Default)";
const RemYanflyOptions_PubicColor_One_SP = "Purple";
const RemYanflyOptions_PubicColor_Two_SP = "Blond";
const RemYanflyOptions_PubicColor_Three_SP = "Black";

const RemYanflyOptions_PubicStyle_SP = "\\i[595]Karryn's Pubic Style";
const RemYanflyOptions_PubicStyle_Help_SP = "Changing Karryn's pubic style is cosmetic only and has no gameplay effect.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_PubicStyle_One_SP = "Natural (Default)";
const RemYanflyOptions_PubicStyle_Two_SP = "Trimmed";
const RemYanflyOptions_PubicStyle_Three_SP = "Bushy";

const RemYanflyOptions_ToggleMaleStrayPubes_SP = "\\i[596]Toggle Male Stray Pubes";
const RemYanflyOptions_ToggleMaleStrayPubes_Help_SP = "Turn this option ON for a chance of stray male pubes sticking onto Karryn's body.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_StrayPubesAmount_SP = "\\i[596]Stray Pubes Amount";
const RemYanflyOptions_StrayPubesAmount_Help_SP = "This setting affects the chance and possible amount of stray pubes that can stick onto Karryn.\nPlay around with this setting if you feel like there's too much or not enough\ndirty male pubic hair on Karryn! Requires the Stray Pubes DLC.";
const RemYanflyOptions_StrayPubesAmount_One_SP = "Default";
const RemYanflyOptions_StrayPubesAmount_Two_SP = "Less";
const RemYanflyOptions_StrayPubesAmount_Three_SP = "More";


const RemYanflyOptions_LovenseEnable_SP = "1) Enable Lovense Integration";
const RemYanflyOptions_LovenseEnable_Help_SP = "\\}Turn this setting ON to show Lovense Integration related settings.\n\\{Note that a real life Lovense sex toy will be required to use any of these features.";

const RemYanflyOptions_LovenseConnectionType_SP = "2) Select Connection Type";
const RemYanflyOptions_LovenseConnectionType_Help_SP = "Connect your Lovense toys to the Lovense Remote App.\n\\}Please select which version of the Lovense Remote App you're using to connect.";
const RemYanflyOptions_LovenseConnectionType_Mobile_SP = "iPhone/Android";
const RemYanflyOptions_LovenseConnectionType_PC_SP = "Windows";

const RemYanflyOptions_LovenseMobileIP_SP = "Enter Local IP";
const RemYanflyOptions_LovenseMobileIP_Help_SP = "\\}Please enter the Local IP displayed in the Game Mode screen of the mobile Lovense Remote app.\nIf you're streaming, please hide this screen while inputting the Local IP.";
const RemYanflyOptions_LovenseMobileIP_Text_SP = "Please enter IP here";

const RemYanflyOptions_LovenseMobilePort_SP = "Enter Http Port";
const RemYanflyOptions_LovenseMobilePort_Help_SP = "\\}Please enter the Http Port displayed in the Game Mode screen of the mobile Lovense Remote app.\nIf you're streaming, please hide this screen while inputting the Http Port.";
const RemYanflyOptions_LovenseMobilePort_Text_SP = "Please enter port here";

const RemYanflyOptions_LovenseMobileHint_SP = "Please enter here";

const RemYanflyOptions_LovenseConnectToys_SP = "3) Connect Toys";
const RemYanflyOptions_LovenseConnectToys_Help_SP = "Please press the Connect button after completing the above steps.";
const RemYanflyOptions_LovenseConnectToys_Text_SP = "CONNECT";

const RemYanflyOptions_LovenseNoToysConnected_SP = "\\C[18]>>>No toys are currently connected<<<";
const RemYanflyOptions_LovenseNoToysConnected_Help_SP = "\\}If you're having issues connecting the toys to the game,\nreview the above steps, make sure you're on the same Wifi network,\nand your VPN is turned off.";


const RemYanflyOptions_LovenseToyNameList_SP = "Name: %1   Battery: %2%"; //Example 'Name: Rem's Toy  Battery: 69%'
const RemYanflyOptions_LovenseToyNameList_Test_SP = "test"; 

const RemYanflyOptions_LovenseIntensity_SP = "(Optional) Change Global Intensity";
const RemYanflyOptions_LovenseIntensity_Help_SP = "This setting allows you modify the intensity of all toy responses.\n\\}Note that the intensity of a toy response is also based on the type of sexual play and Karryn's sluttiness.\n\\}Lowering the intensity here is recommended if this is your first time enabling Lovense Integration for a slutty Karryn until you've adapted.";

const RemYanflyOptions_LovenseTime_SP = "(Optional) Change Global Duration";
const RemYanflyOptions_LovenseTime_Help_SP = "\\}Most non-penetrative sexual acts trigger a toy response only for a limited duration before automatically stopping.\nThis setting allows you modify the duration of those toy responses for all toys.";
const RemYanflyOptions_LovenseTime_Zero_SP = "1/2";
const RemYanflyOptions_LovenseTime_One_SP = "Default";
const RemYanflyOptions_LovenseTime_Two_SP = "2x";
const RemYanflyOptions_LovenseTime_Three_SP = "3x";
const RemYanflyOptions_LovenseTime_Four_SP = "5x";
const RemYanflyOptions_LovenseTime_Five_SP = "Infinite";
const RemYanflyOptions_LovenseTime_Six_SP = "1/6";
const RemYanflyOptions_LovenseTime_Seven_SP = "1/4";

const RemYanflyOptions_LovensePumpEnable_SP = "(Optional) Enable Air Pump";
const RemYanflyOptions_LovensePumpEnable_Help_SP = "Max/Max2 toys have the ability to compress using its air pump.\nYou can turn it off using this option.";

const RemYanflyOptions_LovenseEnableRAID_SP = "4) \\C[27]Enable RAID";
const RemYanflyOptions_LovenseEnableRAID_Help_SP = "\\}\\}'Rem's Advanced Integrated Disco' or RAID for short is Rem's unique toy integration system made for Karryn's Prison.\nBy default with RAID turned off, all connected toys will respond to EVERY sexual act to Karryn.\nTurning on RAID will enable a preset config based on your toys and \\C[27]allow further advanced customization for each connected toy.\\C[0]";

const RemYanflyOptions_RAIDparty_Help_SP = "\\}Choose whether this is a '\\C[5]Party\\C[0]' toy or '\\C[4]Solo\\C[0]' toy.\n\\}\\C[5]Party\\C[0] toys will respond to all sex acts EXCEPT for the ones attributed to other toys.\n\\C[4]Solo\\C[0] toys will ONLY respond to sex acts attributed to it.";
const RemYanflyOptions_RAIDparty_Solo_SP = "Solo";
const RemYanflyOptions_RAIDparty_Party_SP = "Party";

const RemYanflyOptions_RAIDsexact_Help_SP = "\\}Choose up to five different sex acts to attribute to this toy.\n\\}When a sex act is attributed to this toy, this toy will respond when that sex act happens to Karryn.\nAttributed sex acts are also more intense for this toy.";
const RemYanflyOptions_RAIDsexact_Mouth_SP = "Mouth";
const RemYanflyOptions_RAIDsexact_Boobs_SP = "Boobs";
const RemYanflyOptions_RAIDsexact_Clit_SP = "Clit";
const RemYanflyOptions_RAIDsexact_Pussy_SP = "Pussy";
const RemYanflyOptions_RAIDsexact_Anal_SP = "Anal";
const RemYanflyOptions_RAIDsexact_Exhibitionism_SP = "Exhibitionism";
const RemYanflyOptions_RAIDsexact_Masochism_SP = "Masochism";
const RemYanflyOptions_RAIDsexact_Sadism_SP = "Sadism";
const RemYanflyOptions_RAIDsexact_Rimjob_SP = "Rimjob";
const RemYanflyOptions_RAIDsexact_Footjob_SP = "Footjob";
const RemYanflyOptions_RAIDsexact_Hands_SP = "Hands";

const RemYanflyOptions_RAIDarousal_Help_SP = "\\}Choose whether to have this toy respond to Karryn's Arousal.\nIf Arousal is set ON, this toy will produce a constant, low response while Karryn is aroused.";
const RemYanflyOptions_RAIDarousal_ON_SP = "Arousal ON";
const RemYanflyOptions_RAIDarousal_OFF_SP = "Arousal OFF";
const RemYanflyOptions_RAIDorgasm_Help_SP = "\\}Choose whether to have this toy respond when Karryn has an orgasm.\nIf orgasm is set ON, this toy will produce a short, extremely high response whenever Karryn orgasms.";
const RemYanflyOptions_RAIDorgasm_ON_SP = "Orgasm ON";
const RemYanflyOptions_RAIDorgasm_OFF_SP = "Orgasm OFF";

const RemYanflyOptions_RAIDintensity_Help_SP = "Choose the intensity for this toy.\nChoosing global will use the global intensity setting for all toys.";
const RemYanflyOptions_RAIDintensity_Global_SP = "Global Intensity";

const RemYanflyOptions_RAIDtime_Help_SP = "Choose the duration for this toy.\nChoosing global will use the global duration setting for all toys.";
const RemYanflyOptions_RAIDtime_Global_SP = "Global Duration";
const RemYanflyOptions_RAIDTime_One_SP = "Default";
const RemYanflyOptions_RAIDTime_Two_SP = "2x";
const RemYanflyOptions_RAIDTime_Three_SP = "3x";
const RemYanflyOptions_RAIDTime_Four_SP = "5x";
const RemYanflyOptions_RAIDTime_Five_SP = "Infinite";
const RemYanflyOptions_RAIDTime_Six_SP = "1/6";
const RemYanflyOptions_RAIDTime_Seven_SP = "1/4";
const RemYanflyOptions_RAIDTime_Eight_SP = "1/2";

const RemYanflyOptions_OptionsOn_SP = "ON";
const RemYanflyOptions_OptionsOff_SP = "OFF";

//Save
const RemYanflySaveYesSP = "Yes";
const RemYanflySaveNoSP = "No";
const RemYanflySaveEmptySP = "Empty";
const RemYanflySaveDeleteTextSP = "Do you wish to delete this save file?";
const RemYanflySaveLoadTextSP = "Do you wish to load this save file?";
const RemYanflySaveSaveTextSP = "Do you wish to overwrite this save file?";
const RemYanflySaveInvalidTextSP = "This save is for a different game.";
const RemYanflySaveSelectHelpSP = "Please select a file slot.";
const RemYanflySaveLoadHelpSP = "Loads the data from the saved game.";
const RemYanflySaveSaveHelpSP = "Saves the current progress in your game.";
const RemYanflySaveDeleteHelpSP = "Deletes all data from this save file.";
const RemYanflyAutosavingSP = "Autosaving...";

const RemYanflySavePlaytimeSP = "Playtime:";
const RemYanflySaveTotalSavesSP = "Total Saves:";
const RemYanflySaveTotalDaysSP = "Total Days Spent:";
const RemYanflySaveTotalPlaythroughsSP = "Total Playthroughs:";
const RemYanflySaveTotalGameClearsSP = "Game Clear Count:";
const RemYanflySaveTotalEndingsSP = "Endings Seen:"; // currently unused

const RemYanflyTargetEverybodySP = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodySP = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesSP = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesSP = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllySP = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemySP = "Female Enemy"; // currently unused

const RemFTKRSkillTreeConfirmTextSP = "%2";
const RemFTKRSkillTreeYesSP = "Enact";
const RemFTKRSkillTreeNoSP = "Cancel";
const RemFTKRSkillTreeEdictPointsSP = "Edict Points:";
const RemFTKRSkillTreeEdictPointsAbbrSP = "EP";
const RemFTKRSkillTreeOrderSP = "Order:";
const RemFTKRSkillTreeFundingSP = "Funds:";
const RemFTKRSkillTreeFundingCostSP = "Cost:";
const RemFTKRSkillTreeCostItemSP = "%1 Cost:"; // currently unused
const RemFTKRSkillTreePreReqTextSP = "\\c[16]Requirements:";
const RemFTKRSkillTreeReqTypeEdictSP = "Edict: ";
const RemFTKRSkillTreeReqTypePassiveSP = "Passive: ";


const RemErrorMessageSP = "If your error message says 'Array buffer allocation failed' or 'resolution' or 'Out of memory', then your game has run out of memory so please close all other programs, ESPECIALLY BROWSER WINDOWS, before running Karryn's Prison. For all other errors, if your game files or save file haven't been modified and you're playing a legitimate Steam or DLsite copy of the game, please take a screenshot of this screen and report it to the #kp-bug-reports channel on our Discord! Please also tell us as many details of what happened before your error occurred!";

const RemEquipTypesSP = ["","Weapon","Accessory","Title","Load Equip Set", "Save Equip Set"];

const RemSkillTypesSP = ["",
"Attack",
"Energy",
"Sexual",
"Willpower",
"Buffs",
"Debuffs",
"Passives",
"Edicts",
"Talk",
"Sight",
"Off-balance",
"Fallen",
"Masturbate",
"Disarmed",
"Waitress",
"Bartender",
"Receptionist",
"Toilet",
"Masturbate",
"Stripper",
"Intermission",
"Trainer"
];


//Enemy Types
const RemPrisonerGenericSP = "Prisoner";
const RemPrisonerGuardSP = "Guard";
const RemPrisonerThugSP = "Thug";
const RemPrisonerGoblinSP = "Goblin";
const RemPrisonerOrcSP = "Orc";
const RemPrisonerSlimeSP = "Slime";
const RemPrisonerNerdSP = "Nerd";
const RemPrisonerRogueSP = "Rogue";
const RemPrisonerLizardmanSP = "Lizardman";
const RemPrisonerHomelessSP = "Hobo";
const RemPrisonerWerewolfSP = "Werewolf";
const RemPrisonerYetiSP = "Yeti";


const RemReceptionistVisitorSP = "Visitor";
const RemReceptionistFanSP = "Fan";

//Boss Types
const RemBossYasuSP = "Deputy Warden";
const RemBossTonkinSP = "Orc";
const RemBossCargillSP = "Doctor";
const RemBossAronSP = "Alpha Lizardman";
const RemBossNoinimSP = "Great Yeti";
const RemBossGobrielSP = "Captain";
const RemBossEmperorSP = "His Imperial Majesty";

//Disable Smegma Text
const RemDisableSmegmaSkill815NameSP = "Dick Cleaning Machine";


//Skills
const RemRestoreMindPartialSuccessSP = "%1 succeeds in restoring a bit of her mind.";
const RemRestoreMindFullSuccessSP = "%1 succeeds in regaining her mind!";
const RemRestoreMindFailureSP = "%1 wasn't able to restore her mind...";

//Orgasm Skill Message
const RemOrgasmSkillMessageKarrynKissSP = " from kissing";
const RemOrgasmSkillMessageKarrynPettingSP = " from rubbing a cock";
const RemOrgasmSkillMessageKarrynHandjobSP = " from jerking off a cock";
const RemOrgasmSkillMessageKarrynBlowjobSP = " from sucking dick";
const RemOrgasmSkillMessageKarrynTittyFuckSP = " from fucking a cock with her tits";
const RemOrgasmSkillMessageKarrynPussySexSP = " from fucking a cock with her pussy";
const RemOrgasmSkillMessageKarrynAnalSexSP = " from fucking a cock with her ass";
const RemOrgasmSkillMessageEnemyKissSP = " from being kissed";
const RemOrgasmSkillMessageEnemyPettingSP = " from being petted";
const RemOrgasmSkillMessageEnemyHandjobSP = " from being hand fucked";
const RemOrgasmSkillMessageEnemyBlowjobSP = " from being mouth fucked";
const RemOrgasmSkillMessageEnemyTittyFuckSP = " from being titty fucked";
const RemOrgasmSkillMessageEnemyPussySexSP = " from being fucked";
const RemOrgasmSkillMessageEnemyAnalSexSP = " from being ass fucked";
const RemOrgasmSkillMessageEnemyCunnilingusSP = " from receiving cunnilingus";
const RemOrgasmSkillMessageBukkakeSP = " from being cummed on";
const RemOrgasmSkillMessageSwallowSP = " from swallowing cum";
const RemOrgasmSkillMessagePussyCreampieSP = " from being creampied in her pussy";
const RemOrgasmSkillMessageAnalCreampieSP = " from being creampied in her ass";
const RemOrgasmSkillMessageMasochismSP = " from being masochistic";
const RemOrgasmSkillMessageSadismSP = " from being sadistic";
const RemOrgasmSkillMessageMasturbateSP = " from masturbating";
const RemOrgasmSkillMessageSpankSP = " from being spanked";
const RemOrgasmSkillMessageTalkSP = " from being talked down to";
const RemOrgasmSkillMessageSightSP = " from being looked at";
const RemOrgasmSkillMessageToySP = " from the toys";

//Waitress
const RemAlcoholTypeWaterSP = "glass of water";
const RemAlcoholTypePaleAleSP = "pint of pale ale";
const RemAlcoholTypeDarkAleSP = "pint of dark ale";
const RemAlcoholTypeVodkaSP = "glass of vodka";
const RemAlcoholTypeTequilaSP = "glass of tequila";
const RemAlcoholTypeGoldRumSP = "glass of gold rum";
const RemAlcoholTypeOverproofRumSP = "glass of overproof rum";
const RemAlcoholTypeWhiskeySP = "glass of whiskey";
const RemAlcoholTypeDirtyMugsSingularSP = "used mug";
const RemAlcoholTypeDirtyMugsPluralSP = "used mugs";
const RemAlcoholTypeDirtyGlassesSingularSP = "used glass";
const RemAlcoholTypeDirtyGlassesPluralSP = "used glasses";

const RemWaitressGetsTipSP = "\\C[3]%1 gets a tip of %2 gold!";
const RemWaitressEnemySleepSP = "%1 drunkenly falls asleep on the table.";
const RemWaitressEnemyWakeUpSP = "%1 jolts awake from all the commotion.";
const RemWaitressEnemyLeavesBarSP = "\\C[8]%1 gets up and leaves the bar.";
const RemWaitressEnemyLeavesBarDrunkSP = "\\C[8]%1 gets up and drunkenly stumbles out of the bar.";
const RemWaitressEnemyCallingForWaitressSP = "\\C[2]%1 starts calling for a waitress's attention.";
const RemWaitressEnemyDidntCallForWaitressSP = "However, %1 did not call for a waitress.";
const RemWaitressEnemyAskingForDrinkSP = "\\C[2]%1 would like to have a %2.";
const RemWaitressEnemyAskingForWaitressToDrinkSP = "%1 is offering to give %2 a tip if she takes a sip of his drink.";
const RemWaitressEnemyAskingForWaitressToFlashSP = "%1 is offering to give %2 a tip if she flashes her hot body.";
const RemWaitressRefusesDrinkSP = "But %1 refuses the drink to the disappointment of everyone around her.";
const RemWaitressAcceptsDrinkSP = "\\C[31]%1 takes a sip of the drink while everyone grins and cheers.";
const RemWaitressWontFlashSP = "But %1 refuses to flash her body to random men in a bar.";
const RemWaitressFlashesSP = "\\C[27]%1 smiles and gives everyone an eyeful to look at.";
const RemWaitressEnemyRefusesDrinkSP = "But %1 didn't ask for that drink.";
const RemWaitressEnemyAcceptsDrinkSP = "%1 takes and pays for the drink.";
const RemWaitressEnemyAlcoholKissSP = "\\C[27]%1 force fed %2 his drink while kissing her!";
const RemWaitressEnemyCheerForBrawlNoDrinkSP = "%1 cheers as he watches the ongoing brawl.";
const RemWaitressEnemyCheerForBrawlYesDrinkSP = "%1 drinks as he cheers and watches the ongoing brawl.";
const RemWaitressBrawlStartSP = "\\C[18]A brawl has started!!";
const RemWaitressBrawlJoinSP = "\\C[18]%1 eagerly jumps into the brawl!";
const RemWaitressBarDamageSP = "\\C[3]The bar takes %1 gold worth of damage!";
const RemWaitressEnemyTellsJokeSP = "%1 starts telling a joke.";
const RemWaitressEnemyContinuesJokeSP = "%1 continues to share his joke.";
const RemWaitressEnemyHearsJokeSP = "%1 listens to %2's joke.";
const RemWaitressEnemyLaughsJokeSP = "%1 laughs at %2's joke.";
const RemWaitressEnemyChugsDrinkSP = "%1 starts chugging his drink.";
const RemWaitressEnemyChugsDrinkFinishSP = "%1 chugs down the rest of his drink.";
const RemWaitressEnemyChattingSP = "%1 chats with %2.";
const RemWaitressEnemyChattingHimselfSP = "%1 talks to himself.";
const RemWaitressEnemyEntersBarSP = "\\C[2]%1 enters the bar and sits down at %2.";
const RemWaitressEnemyFumingSP = "\\C[10]%1 has a dark look on his face...";
const RemWaitressEnemyStartSexSP = "\\C[27]%2 drunkenly stumbles a bit and %1 helps her rest her body on top of the table!!!";
const RemWaitressEnemyRefillsKarrynMugSP = "%1 refills %2's mug with more pale ale!";
const RemWaitressEnemyDumpsKarrynMugSP = "%1 takes %2's mug and dumps all the ale on the floor!";
const RemWaitressDrinkSemenMugSP = "\\C[27]%1 gulps down \\C[1]%2 ml of semen!";

const RemReceptionistVisitingRoomA_SP = "Visiting Room A";
const RemReceptionistVisitingRoomB_SP = "Visiting Room B";
const RemReceptionistVisitingRoomC_SP = "Visiting Room C";
const RemReceptionistVisitingRoomD_SP = "Visiting Room D";

const RemReceptionistNewVisitorSP = "\\C[2]%1 got assigned their number and sits down.";
const RemReceptionistNewGoblinSP = "\\C[10]A goblin has appeared!";
const RemReceptionistGoblinDefeatedSP = "\\C[8]%1 has fled away!";
const RemReceptionistVisitorEntersVisitingRoomSP = "\\C[11]%1 entered %2.";
const RemReceptionistVisitingRoomStatusOccupiedPluralSP = "\\C[23]\"%1 is in use for %2 more minutes, over!\"";
const RemReceptionistVisitingRoomStatusOccupiedSingleSP = "\\C[23]\"%1 is in use for one more minute, over!\"";
const RemReceptionistVisitingRoomStatusNotOccupiedSP = "\\C[23]\"%1 is currently not being used, over!\"";
const RemReceptionistVisitorWantsToHandOverPaperSP = "%1 is waiting to hand over their filled out paperwork.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomSP = "\\C[10]%1 is complaining that %2 was still occupied.";
const RemReceptionistGreetVisitorResultNormalSP = "%1 replies that they are here for visitation.";
const RemReceptionistFinishedProcessingPapersSP = "%1's papers are processed. They're allowed %2 minutes of visitation.";
const RemReceptionistVisitorLeavesAngrySP = "\\C[10]%1 suddenly angrily leaves the Visitor Center!";
const RemReceptionistFanLeavesHappySP = "%1 leaves the Visitor Center with a smile.";
const RemReceptionistFanLeavesDejectedSP = "%1 dejectedly leaves the Visitor Center.";
const RemReceptionistPervLeavesHappySP = "%1 leaves the Visitor Center with a huge grin.";
const RemReceptionistPervLeavesAngrySP = "%1 angrily leaves the Visitor Center.";
const RemReceptionistNotHereForVisitationSP = "Seems like %1 is not actually interested in visiting any inmates!";

const RemGloryBattleEndSP = "The door opens...";
const RemGloryLeftStallCockNameSP = "The Cock on the Left";
const RemGloryRightStallCockNameSP = "The Cock on the Right";
const RemGloryGuestEnterBathroomSP = "\\C[8]Someone has entered the bathroom.";
const RemGloryGuestLeaveBathroomSP = "\\C[8]Someone has left the bathroom.";
const RemGloryGuestEnterLeftStallSP = "\\C[7]Someone has entered the left stall.";
const RemGloryGuestLeaveLeftStallSP = "\\C[7]Someone has vacated the left stall.";
const RemGloryGuestEnterRightStallSP = "\\C[7]Someone has entered the right stall.";
const RemGloryGuestLeaveRightStallSP = "\\C[7]Someone has vacated the right stall.";
const RemGloryGuestPissingLeftStallSP = "\\C[8]Pissing sounds are coming from the left stall.";
const RemGloryGuestEatingLeftStallSP = "\\C[8]Food chewing sounds are coming from the left stall.";
const RemGloryGuestPissingRightStallSP = "\\C[8]Pissing sounds are coming from the right stall.";
const RemGloryGuestEatingRightStallSP = "\\C[8]Food chewing sounds are coming from the right stall.";
const RemGloryGuestShowedThroughLeftHoleSP = "\\C[27]A cock appears from the hole on the left!";
const RemGloryGuestShowedThroughRightHoleSP = "\\C[27]A cock appears from the hole on the right!";

const RemStripperBattleEndSP = "Karryn's show has ended.";
const RemStripperEnemyTossCondomOntoStageSP = "%1 tosses a condom onto the stage.";
const RemStripperEnemyTipsCondomToBeltSP = "%1 ties a condom to %2's garter belt!";
const RemStripperEnemyTipsCondomToBraSP = "%1 ties a condom to %2's bra!";
const RemStripperEnemyTipsCondomToNippleSP = "%1 ties a condom to %2's erect nipple!";
const RemStripperEnemyTipsCondomToHairbandSP = "%1 ties a condom to %2's bunny hairband!";
const RemStripperEnemyTipsCondomToSidetailSP = "%1 ties a condom to %2's sidetail!";
const RemStripperEnemyEntersStripClubSP = "\\C[8]%1 takes a seat in front of the stage.";
const RemStripperEnemyLeavesStripClubHappySP = "\\C[8]%1 gets up and leaves with a smile.";
const RemStripperEnemyLeavesStripClubUnhappySP = "\\C[8]%1 gets up and leaves frustrated.";
const RemStripperEnemyJoinVIPSingularSP = "\\C[8]%1 holds the hand of the remaining patron and brings them to the private room......";
const RemStripperEnemyJoinVIPPluralSP = "\\C[8]%1 holds the hands of the remaining patrons and brings them to the private room......";

const RemTrainerEnemyObserveFormExcellentSP = "\\C[8](%1's form is \\C[10]pretty much perfect\\C[8].)";
const RemTrainerEnemyObserveFormGoodSP = "\\C[8](%1's form looks good%2\\C[8].)";
const RemTrainerEnemyObserveFormOkaySP = "\\C[8](%1's form could be better%2\\C[8].)";
const RemTrainerEnemyObserveFormPoorSP = "\\C[8](%1's form could use a lot of work%2\\C[8].)";
const RemTrainerEnemyObserveFormBadSP = "\\C[8](%1's form is absolutely terrible%2\\C[8].)";
const RemTrainerEnemyObserveFormMaxSP = "\\C[8] and it seems like \\C[10]this is his best"; //上のGood～Badの％２はここ
const RemTrainerEnemyObserveStaminaTiredSP = "\\C[8](He's also starting to look tired.)";
const RemTrainerEnemyObserveStaminaExhaustedSP = "\\C[8](He also looks exhausted.)";
const RemTrainerEnemyEntersGymSP = "\\C[2]%1 enters the gym and begins working out.";
const RemTrainerEnemyLeavesGymFinishedWorkoutSP = "\\C[8]%1 finished his workout and leaves the gym.";
const RemTrainerEnemyLeavesGymFailedWorkoutSP = "\\C[8]%1 couldn't finish his workout and leaves the gym tired.";
const RemTrainerEnemyLeavesGymBlueballedSP = "\\C[8]%1 is too distracted and bothered by his blue balls and leaves the gym.";
const RemTrainerEnemyLeavesGymHappySP = "\\C[8]%1 couldn't finish his workout but still leaves the gym with a big smile.";
const RemTrainerRinkanSpatsRippedSP = "Karryn's leggings got ripped!";

const RemMidBattleEnemyReinforcementSP = "\\C[2]%1 arrives as enemy reinforcement!";

const RemLevelFiveFreeBattleDefeatSettingSP = [
"a random Level",
"Level 1 Bar Storage",
"Level 2 Bathroom",
"Level 3 Solitary Cell",
"Level 4 Abandoned Area",
"Level 5 Altar"
];
