import{E as u,L as X}from"./index-5e7e3b04.js";import{k as W,t,s as v,L as k,l as w,r as z,n as x,u as R,q as U,v as T,w as _}from"./index-67988bfd.js";import"./editor-e1e4dd77.js";import"./index-86b9c9e9.js";import"./vendor-f3b2d100.js";const V=94,m=1,Y=95,C=96,S=2,y=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],Z=58,G=40,P=95,N=91,d=45,q=46,E=35,j=37;function c(e){return e>=65&&e<=90||e>=97&&e<=122||e>=161}function D(e){return e>=48&&e<=57}const I=new u((e,O)=>{for(let o=!1,a=0,l=0;;l++){let{next:r}=e;if(c(r)||r==d||r==P||o&&D(r))!o&&(r!=d||l>0)&&(o=!0),a===l&&r==d&&a++,e.advance();else{o&&e.acceptToken(r==G?Y:a==2&&O.canShift(S)?S:C);break}}}),B=new u(e=>{if(y.includes(e.peek(-1))){let{next:O}=e;(c(O)||O==P||O==E||O==q||O==N||O==Z||O==d)&&e.acceptToken(V)}}),A=new u(e=>{if(!y.includes(e.peek(-1))){let{next:O}=e;if(O==j&&(e.advance(),e.acceptToken(m)),c(O)){do e.advance();while(c(e.next));e.acceptToken(m)}}}),F=W({"AtKeyword import charset namespace keyframes media supports":t.definitionKeyword,"from to selector":t.keyword,NamespaceName:t.namespace,KeyframeName:t.labelName,TagName:t.tagName,ClassName:t.className,PseudoClassName:t.constant(t.className),IdName:t.labelName,"FeatureName PropertyName":t.propertyName,AttributeName:t.attributeName,NumberLiteral:t.number,KeywordQuery:t.keyword,UnaryQueryOp:t.operatorKeyword,"CallTag ValueName":t.atom,VariableName:t.variableName,Callee:t.operatorKeyword,Unit:t.unit,"UniversalSelector NestingSelector":t.definitionOperator,MatchOp:t.compareOperator,"ChildOp SiblingOp, LogicOp":t.logicOperator,BinOp:t.arithmeticOperator,Important:t.modifier,Comment:t.blockComment,ParenthesizedContent:t.special(t.name),ColorLiteral:t.color,StringLiteral:t.string,":":t.punctuation,"PseudoOp #":t.derefOperator,"; ,":t.separator,"( )":t.paren,"[ ]":t.squareBracket,"{ }":t.brace}),L={__proto__:null,lang:32,"nth-child":32,"nth-last-child":32,"nth-of-type":32,"nth-last-of-type":32,dir:32,"host-context":32,url:60,"url-prefix":60,domain:60,regexp:60,selector:134},K={__proto__:null,"@import":114,"@media":138,"@charset":142,"@namespace":146,"@keyframes":152,"@supports":164},J={__proto__:null,not:128,only:128,from:158,to:160},H=X.deserialize({version:14,states:"7WQYQ[OOO#_Q[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO#fQ[O'#CfO$YQXO'#CaO$aQ[O'#ChO$lQ[O'#DPO$qQ[O'#DTOOQP'#Ed'#EdO$vQdO'#DeO%bQ[O'#DrO$vQdO'#DtO%sQ[O'#DvO&OQ[O'#DyO&TQ[O'#EPO&cQ[O'#EROOQS'#Ec'#EcOOQS'#ET'#ETQYQ[OOO&jQXO'#CdO'_QWO'#DaO'dQWO'#EjO'oQ[O'#EjQOQWOOOOQP'#Cg'#CgOOQP,59Q,59QO#fQ[O,59QO'yQ[O'#EWO(eQWO,58{O(mQ[O,59SO$lQ[O,59kO$qQ[O,59oO'yQ[O,59sO'yQ[O,59uO'yQ[O,59vO(xQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO)PQWO,59SO)UQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO)ZQ`O,59oOOQS'#Cp'#CpO$vQdO'#CqO)cQvO'#CsO*pQtO,5:POOQO'#Cx'#CxO)UQWO'#CwO+UQWO'#CyOOQS'#Eg'#EgOOQO'#Dh'#DhO+ZQ[O'#DoO+iQWO'#EkO&TQ[O'#DmO+wQWO'#DpOOQO'#El'#ElO(hQWO,5:^O+|QpO,5:`OOQS'#Dx'#DxO,UQWO,5:bO,ZQ[O,5:bOOQO'#D{'#D{O,cQWO,5:eO,hQWO,5:kO,pQWO,5:mOOQS-E8R-E8RO$vQdO,59{O,xQ[O'#EYO-VQWO,5;UO-VQWO,5;UOOQP1G.l1G.lO-|QXO,5:rOOQO-E8U-E8UOOQS1G.g1G.gOOQP1G.n1G.nO)PQWO1G.nO)UQWO1G.nOOQP1G/V1G/VO.ZQ`O1G/ZO.tQXO1G/_O/[QXO1G/aO/rQXO1G/bO0YQWO,59zO0_Q[O'#DOO0fQdO'#CoOOQP1G/Z1G/ZO$vQdO1G/ZO0mQpO,59]OOQS,59_,59_O$vQdO,59aO0uQWO1G/kOOQS,59c,59cO0zQ!bO,59eO1SQWO'#DhO1_QWO,5:TO1dQWO,5:ZO&TQ[O,5:VO&TQ[O'#EZO1lQWO,5;VO1wQWO,5:XO'yQ[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O2YQWO1G/|O2_QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XO2mQtO1G/gOOQO,5:t,5:tO3TQ[O,5:tOOQO-E8W-E8WO3bQWO1G0pOOQP7+$Y7+$YOOQP7+$u7+$uO$vQdO7+$uOOQS1G/f1G/fO3mQXO'#EiO3tQWO,59jO3yQtO'#EUO4nQdO'#EfO4xQWO,59ZO4}QpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO5VQWO1G/PO$vQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO5[QWO,5:uOOQO-E8X-E8XO5jQXO1G/vOOQS7+%h7+%hO5qQYO'#CsO(hQWO'#E[O5yQdO,5:hOOQS,5:h,5:hO6XQtO'#EXO$vQdO'#EXO7VQdO7+%ROOQO7+%R7+%ROOQO1G0`1G0`O7jQpO<<HaO7rQWO,5;TOOQP1G/U1G/UOOQS-E8S-E8SO$vQdO'#EVO7zQWO,5;QOOQT1G.u1G.uOOQP<<Ha<<HaOOQS7+$k7+$kO8SQdO7+%ZOOQO7+%b7+%bOOQS,5:v,5:vOOQS-E8Y-E8YOOQS1G0S1G0SO8ZQtO,5:sOOQS-E8V-E8VOOQO<<Hm<<HmOOQPAN={AN={O9XQdO,5:qOOQO-E8T-E8TOOQO<<Hu<<Hu",stateData:"9i~O#UOSROS~OUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SQO#XSO~OQeOUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SdO#XSO~O#P#^P~P!ZO#SiO~O]nO^nOplOtoOxpO|qO!PsO#QrO#XkO~O!RtO~P#kO`zO#RwO#SvO~O#S{O~O#S}O~OQ!WOb!QOf!WOh!WOn!VO#R!TO#S!PO#[!RO~Ob!YO!b![O!e!]O#S!XO!R#_P~Oh!bOn!VO#S!aO~O#S!dO~Ob!YO!b![O!e!]O#S!XO~O!W#_P~P%bO]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#QWX#XWX~O]!iO~O!W!jO#P#^X!Q#^X~O#P#^X!Q#^X~P!ZOUXOXXO]UO^UOtVOxWO#SQO#XSO~OplO!RtO~O`!sO#RwO#SvO~O!Q#^P~P!ZOb!zO~Ob!{O~Ov!|Oz!}O~OP#PObgXjgX!WgX!bgX!egX#SgXagXQgXfgXhgXngXpgX!VgX#PgX#RgX#[gXvgX!QgX~Ob!YOj#QO!b![O!e!]O#S!XO!W#_P~Ob#TO~Ob!YO!b![O!e!]O#S#UO~Op#YO!`#XO!R#_X!W#_X~Ob#]O~Oj#QO!W#_O~O!W#`O~Oh#aOn!VO~O!R#bO~O!RtO!`#XO~O!RtO!W#eO~O!W!|X#P!|X!Q!|X~P!ZO!W!jO#P#^a!Q#^a~O]nO^nOtoOxpO|qO!PsO#QrO#XkO~Op!za!R!zaa!za~P-bOv#lOz#mO~O]nO^nOtoOxpO#XkO~Op{i|{i!P{i!R{i#Q{ia{i~P.cOp}i|}i!P}i!R}i#Q}ia}i~P.cOp!Oi|!Oi!P!Oi!R!Oi#Q!Oia!Oi~P.cO!Q#nO~Oa#]P~P'yOa#YP~P$vOa#uOj#QO~O!W#wO~Oh#xOo#xO~O]!^Xa![X!`![X~O]#yO~Oa#zO!`#XO~Op#YO!R#_a!W#_a~O!`#XOp!aa!R!aa!W!aaa!aa~O!W$PO~O!Q$TO!q$RO!r$RO#[$QO~Oj#QOp$VO!V$XO!W!Ti#P!Ti!Q!Ti~P$vO!W!|a#P!|a!Q!|a~P!ZO!W!jO#P#^i!Q#^i~Oa#]X~P#kOa$]O~Oj#QOQ!xXa!xXb!xXf!xXh!xXn!xXp!xX#R!xX#S!xX#[!xX~Op$_Oa#YX~P$vOa$aO~Oj#QOv$bO~Oa$cO~O!`#XOp!}a!R!}a!W!}a~Oa$eO~P-bOP#PO!RgX~O!Q$hO!q$RO!r$RO#[$QO~Oj#QOQ!{Xb!{Xf!{Xh!{Xn!{Xp!{X!V!{X!W!{X#P!{X#R!{X#S!{X#[!{X!Q!{X~Op$VO!V$kO!W!Tq#P!Tq!Q!Tq~P$vOj#QOv$lO~OplOa#]a~Op$_Oa#Ya~Oa$oO~P$vOj#QOQ!{ab!{af!{ah!{an!{ap!{a!V!{a!W!{a#P!{a#R!{a#S!{a#[!{a!Q!{a~Oa!yap!ya~P$vOo#[j!Pj~",goto:",`#aPPPPP#bP#k#zP#k$Z#kPP$aPPP$g$p$pP%SP$pP$p%j%|PPP&f&l#kP&rP#kP&xP#kP#k#kPPP'O'b'oPP#bPP'v'v(Q'vP'vP'v'vP#bP#bP#bP(T#bP(W(ZPP#bP#bP(^(m({)R)])c)m)sPPPPPP)y*SP*o*rP+h+k+q+z_aOPcgt!j#hkXOPcglqrst!j!z#]#hkROPcglqrst!j!z#]#hQjSR!mkQxUR!qnQ!qzQ#S!UR#k!sq!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mT$R#b$Sq!UY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mQ!b]R#a!cQyUR!rnQ!qyR#k!rQ|VR!toQ!OWR!upQuTQ!pmQ#^!_Q#d!fQ#e!gR$f$RSfPtQ!lgQ#g!jR$Y#hZePgt!j#ha!^Z_`!S!Y![#X#YR#V!YR!c]R!e^R#c!eQcOSgPtU!hcg#hR#h!jQ#r!{U$^#r$d$mQ$d#yR$m$_Q$`#rR$n$`QmTS!om$[R$[#oQ$W#fR$j$WQ!kfS#i!k#jR#j!lQ#Z!ZR#}#ZQ$S#bR$g$S_bOPcgt!j#h^TOPcgt!j#hQ!nlQ!vqQ!wrQ!xsQ#o!zR$O#]R#s!{Q!SYQ!`[Q#O!QQ#f!i[#q!{#r#y$_$d$mQ#t!}Q#v#QS$U#f$WQ$Z#mR$i$VR#p!zQhPR!ytQ!_ZQ!g`R#R!SU!ZZ`!SQ!f_Q#W!YQ#[![Q#{#XR#|#Y",nodeNames:"⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule Styles",maxTerm:108,nodeProps:[["openedBy",17,"(",48,"{"],["closedBy",18,")",49,"}"]],propSources:[F],skippedNodes:[0,3],repeatNodeCount:8,tokenData:"Lq~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Cu![!]Dp!]!^El!^!_$}!_!`E}!`!aF`!a!b$}!b!cG[!c!}$}!}#OHt#O#P$}#P#QIV#Q#R6d#R#T$}#T#UIh#U#c$}#c#dJy#d#o$}#o#pK`#p#q6d#q#rKq#r#sLS#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`Lk<%lO$}W%QSOy%^z;'S%^;'S;=`%o<%lO%^W%cSoWOy%^z;'S%^;'S;=`%o<%lO%^W%rP;=`<%l%^~%zh#U~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#U~oWOX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^^)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^^)sUoWOy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^^*[UoWOy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^^*sUoWOy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^^+[UoWOy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^^+sUoWOy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^^,[UoWOy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^^,sUoWOy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^^-[UoWOy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^^-uS!VUoWOy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.R_/zYtPOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^^0oYoWOy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^^1dYoWOy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^^2ZYfUoWOy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^^3QYfUoWOy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^^3uYoWOy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^^4lYfUoWOy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^^5aYoWOy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^^6WSfUoWOy%^z;'S%^;'S;=`%o<%lO%^Y6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^Y7QSzQoWOy%^z;'S%^;'S;=`%o<%lO%^X7cSXPOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7o_9cSbVOy%^z;'S%^;'S;=`%o<%lO%^~9tOa~_9{UUPjSOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^_:fWjS!PPOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^^;TUoWOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^^;nYoW#[UOy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^^<cYoWOy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=WUoWOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=qUoW#[UOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^>[[oW#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^_?VSpVOy%^z;'S%^;'S;=`%o<%lO%^^?hWjSOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^_@VU#XPOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjSOy%^z{@}{;'S%^;'S;=`%o<%lO%^~ASUoWOy@}yzAfz{Bm{;'S@};'S;=`Co<%lO@}~AiTOzAfz{Ax{;'SAf;'S;=`Bg<%lOAf~A{VOzAfz{Ax{!PAf!P!QBb!Q;'SAf;'S;=`Bg<%lOAf~BgOR~~BjP;=`<%lAf~BrWoWOy@}yzAfz{Bm{!P@}!P!QC[!Q;'S@};'S;=`Co<%lO@}~CcSoWR~Oy%^z;'S%^;'S;=`%o<%lO%^~CrP;=`<%l@}^Cz[#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^XDuU]POy%^z![%^![!]EX!];'S%^;'S;=`%o<%lO%^XE`S^PoWOy%^z;'S%^;'S;=`%o<%lO%^_EqS!WVOy%^z;'S%^;'S;=`%o<%lO%^YFSSzQOy%^z;'S%^;'S;=`%o<%lO%^XFeU|POy%^z!`%^!`!aFw!a;'S%^;'S;=`%o<%lO%^XGOS|PoWOy%^z;'S%^;'S;=`%o<%lO%^XG_WOy%^z!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHO[!YPoWOy%^z}%^}!OGw!O!Q%^!Q![Gw![!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHySxPOy%^z;'S%^;'S;=`%o<%lO%^^I[SvUOy%^z;'S%^;'S;=`%o<%lO%^XIkUOy%^z#b%^#b#cI}#c;'S%^;'S;=`%o<%lO%^XJSUoWOy%^z#W%^#W#XJf#X;'S%^;'S;=`%o<%lO%^XJmS!`PoWOy%^z;'S%^;'S;=`%o<%lO%^XJ|UOy%^z#f%^#f#gJf#g;'S%^;'S;=`%o<%lO%^XKeS!RPOy%^z;'S%^;'S;=`%o<%lO%^_KvS!QVOy%^z;'S%^;'S;=`%o<%lO%^ZLXU!PPOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^WLnP;=`<%l$}",tokenizers:[B,A,I,0,1,2,3],topRules:{StyleSheet:[0,4],Styles:[1,84]},specialized:[{term:95,get:e=>L[e]||-1},{term:56,get:e=>K[e]||-1},{term:96,get:e=>J[e]||-1}],tokenPrec:1123});let p=null;function Q(){if(!p&&typeof document=="object"&&document.body){let{style:e}=document.body,O=[],o=new Set;for(let a in e)a!="cssText"&&a!="cssFloat"&&typeof e[a]=="string"&&(/[A-Z]/.test(a)&&(a=a.replace(/[A-Z]/g,l=>"-"+l.toLowerCase())),o.has(a)||(O.push(a),o.add(a)));p=O.sort().map(a=>({type:"property",label:a}))}return p||[]}const g=["active","after","any-link","autofill","backdrop","before","checked","cue","default","defined","disabled","empty","enabled","file-selector-button","first","first-child","first-letter","first-line","first-of-type","focus","focus-visible","focus-within","fullscreen","has","host","host-context","hover","in-range","indeterminate","invalid","is","lang","last-child","last-of-type","left","link","marker","modal","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","part","placeholder","placeholder-shown","read-only","read-write","required","right","root","scope","selection","slotted","target","target-text","valid","visited","where"].map(e=>({type:"class",label:e})),f=["above","absolute","activeborder","additive","activecaption","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","antialiased","appworkspace","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic-abegede-gez","ethiopic-halehame-aa-er","ethiopic-halehame-gez","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","graytext","grid","groove","hand","hard-light","help","hidden","hide","higher","highlight","highlighttext","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","justify","keep-all","landscape","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-hexadecimal","lower-latin","lower-norwegian","lowercase","ltr","luminosity","manipulation","match","matrix","matrix3d","medium","menu","menutext","message-box","middle","min-intrinsic","mix","monospace","move","multiple","multiple_mask_images","multiply","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","opacity","open-quote","optimizeLegibility","optimizeSpeed","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","text","text-bottom","text-top","textarea","textfield","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","to","top","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-latin","uppercase","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"].map(e=>({type:"keyword",label:e})).concat(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].map(e=>({type:"constant",label:e}))),M=["a","abbr","address","article","aside","b","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","dd","del","details","dfn","dialog","div","dl","dt","em","figcaption","figure","footer","form","header","hgroup","h1","h2","h3","h4","h5","h6","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","meter","nav","ol","output","p","pre","ruby","section","select","small","source","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","tr","u","ul"].map(e=>({type:"type",label:e})),n=/^(\w[\w-]*|-\w[\w-]*|)$/,ee=/^-(-[\w-]*)?$/;function ae(e,O){var o;if((e.name=="("||e.type.isError)&&(e=e.parent||e),e.name!="ArgList")return!1;let a=(o=e.parent)===null||o===void 0?void 0:o.firstChild;return(a==null?void 0:a.name)!="Callee"?!1:O.sliceString(a.from,a.to)=="var"}const h=new _,Oe=["Declaration"];function te(e){for(let O=e;;){if(O.type.isTop)return O;if(!(O=O.parent))return e}}function $(e,O){if(O.to-O.from>4096){let o=h.get(O);if(o)return o;let a=[],l=new Set,r=O.cursor(T.IncludeAnonymous);if(r.firstChild())do for(let i of $(e,r.node))l.has(i.label)||(l.add(i.label),a.push(i));while(r.nextSibling());return h.set(O,a),a}else{let o=[],a=new Set;return O.cursor().iterate(l=>{var r;if(l.name=="VariableName"&&l.matchContext(Oe)&&((r=l.node.nextSibling)===null||r===void 0?void 0:r.name)==":"){let i=e.sliceString(l.from,l.to);a.has(i)||(a.add(i),o.push({label:i,type:"variable"}))}}),o}}const oe=e=>{let{state:O,pos:o}=e,a=v(O).resolveInner(o,-1),l=a.type.isError&&a.from==a.to-1&&O.doc.sliceString(a.from,a.to)=="-";if(a.name=="PropertyName"||(l||a.name=="TagName")&&/^(Block|Styles)$/.test(a.resolve(a.to).name))return{from:a.from,options:Q(),validFor:n};if(a.name=="ValueName")return{from:a.from,options:f,validFor:n};if(a.name=="PseudoClassName")return{from:a.from,options:g,validFor:n};if(a.name=="VariableName"||(e.explicit||l)&&ae(a,O.doc))return{from:a.name=="VariableName"?a.from:o,options:$(O.doc,te(a)),validFor:ee};if(a.name=="TagName"){for(let{parent:s}=a;s;s=s.parent)if(s.name=="Block")return{from:a.from,options:Q(),validFor:n};return{from:a.from,options:M,validFor:n}}if(!e.explicit)return null;let r=a.resolve(o),i=r.childBefore(o);return i&&i.name==":"&&r.name=="PseudoClassSelector"?{from:o,options:g,validFor:n}:i&&i.name==":"&&r.name=="Declaration"||r.name=="ArgList"?{from:o,options:f,validFor:n}:r.name=="Block"||r.name=="Styles"?{from:o,options:Q(),validFor:n}:null},b=k.define({name:"css",parser:H.configure({props:[w.add({Declaration:z()}),x.add({Block:R})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"}},indentOnInput:/^\s*\}$/,wordChars:"-"}});function de(){return new U(b,b.data.of({autocomplete:oe}))}export{de as css,oe as cssCompletionSource,b as cssLanguage};
