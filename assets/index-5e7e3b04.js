import{P as j,B as G,C as E,D as U,N as w,T as b,v as H}from"./index-67988bfd.js";class P{constructor(t,e,s,i,h,r,n,a,l,f=0,u){this.p=t,this.stack=e,this.state=s,this.reducePos=i,this.pos=h,this.score=r,this.buffer=n,this.bufferBase=a,this.curContext=l,this.lookAhead=f,this.parent=u}toString(){return`[${this.stack.filter((t,e)=>e%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(t,e,s=0){let i=t.parser.context;return new P(t,[],e,s,s,0,[],0,i?new y(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=t}reduce(t){var e;let s=t>>19,i=t&65535,{parser:h}=this.p,r=h.dynamicPrecedence(i);if(r&&(this.score+=r),s==0){this.pushState(h.getGoto(this.state,i,!0),this.reducePos),i<h.minRepeatTerm&&this.storeNode(i,this.reducePos,this.reducePos,4,!0),this.reduceContext(i,this.reducePos);return}let n=this.stack.length-(s-1)*3-(t&262144?6:0),a=n?this.stack[n-2]:this.p.ranges[0].from,l=this.reducePos-a;l>=2e3&&!(!((e=this.p.parser.nodeSet.types[i])===null||e===void 0)&&e.isAnonymous)&&(a==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=l):this.p.lastBigReductionSize<l&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=a,this.p.lastBigReductionSize=l));let f=n?this.stack[n-1]:0,u=this.bufferBase+this.buffer.length-f;if(i<h.minRepeatTerm||t&131072){let c=h.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(i,a,c,u+4,!0)}if(t&262144)this.state=this.stack[n];else{let c=this.stack[n-3];this.state=h.getGoto(c,i,!0)}for(;this.stack.length>n;)this.stack.pop();this.reduceContext(i,a)}storeNode(t,e,s,i=4,h=!1){if(t==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let r=this,n=this.buffer.length;if(n==0&&r.parent&&(n=r.bufferBase-r.parent.bufferBase,r=r.parent),n>0&&r.buffer[n-4]==0&&r.buffer[n-1]>-1){if(e==s)return;if(r.buffer[n-2]>=e){r.buffer[n-2]=s;return}}}if(!h||this.pos==s)this.buffer.push(t,e,s,i);else{let r=this.buffer.length;if(r>0&&this.buffer[r-4]!=0)for(;r>0&&this.buffer[r-2]>s;)this.buffer[r]=this.buffer[r-4],this.buffer[r+1]=this.buffer[r-3],this.buffer[r+2]=this.buffer[r-2],this.buffer[r+3]=this.buffer[r-1],r-=4,i>4&&(i-=4);this.buffer[r]=t,this.buffer[r+1]=e,this.buffer[r+2]=s,this.buffer[r+3]=i}}shift(t,e,s){let i=this.pos;if(t&131072)this.pushState(t&65535,this.pos);else if(t&262144)this.pos=s,this.shiftContext(e,i),e<=this.p.parser.maxNode&&this.buffer.push(e,i,s,4);else{let h=t,{parser:r}=this.p;(s>this.pos||e<=r.maxNode)&&(this.pos=s,r.stateFlag(h,1)||(this.reducePos=s)),this.pushState(h,i),this.shiftContext(e,i),e<=r.maxNode&&this.buffer.push(e,i,s,4)}}apply(t,e,s){t&65536?this.reduce(t):this.shift(t,e,s)}useNode(t,e){let s=this.p.reused.length-1;(s<0||this.p.reused[s]!=t)&&(this.p.reused.push(t),s++);let i=this.pos;this.reducePos=this.pos=i+t.length,this.pushState(e,i),this.buffer.push(s,i,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this,this.p.stream.reset(this.pos-t.length)))}split(){let t=this,e=t.buffer.length;for(;e>0&&t.buffer[e-2]>t.reducePos;)e-=4;let s=t.buffer.slice(e),i=t.bufferBase+e;for(;t&&i==t.bufferBase;)t=t.parent;return new P(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,s,i,this.curContext,this.lookAhead,t)}recoverByDelete(t,e){let s=t<=this.p.parser.maxNode;s&&this.storeNode(t,this.pos,e,4),this.storeNode(0,this.pos,e,s?8:4),this.pos=this.reducePos=e,this.score-=190}canShift(t){for(let e=new W(this);;){let s=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,t);if(s==0)return!1;if(!(s&65536))return!0;e.reduce(s)}}recoverByInsert(t){if(this.stack.length>=300)return[];let e=this.p.parser.nextStates(this.state);if(e.length>4<<1||this.stack.length>=120){let i=[];for(let h=0,r;h<e.length;h+=2)(r=e[h+1])!=this.state&&this.p.parser.hasAction(r,t)&&i.push(e[h],r);if(this.stack.length<120)for(let h=0;i.length<4<<1&&h<e.length;h+=2){let r=e[h+1];i.some((n,a)=>a&1&&n==r)||i.push(e[h],r)}e=i}let s=[];for(let i=0;i<e.length&&s.length<4;i+=2){let h=e[i+1];if(h==this.state)continue;let r=this.split();r.pushState(h,this.pos),r.storeNode(0,r.pos,r.pos,4,!0),r.shiftContext(e[i],this.pos),r.score-=200,s.push(r)}return s}forceReduce(){let t=this.p.parser.stateSlot(this.state,5);if(!(t&65536))return!1;let{parser:e}=this.p;if(!e.validAction(this.state,t)){let s=t>>19,i=t&65535,h=this.stack.length-s*3;if(h<0||e.getGoto(this.stack[h],i,!1)<0)return!1;this.storeNode(0,this.reducePos,this.reducePos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:t}=this.p;return t.data[t.stateSlot(this.state,1)]==65535&&!t.stateSlot(this.state,4)}restart(){this.state=this.stack[0],this.stack.length=0}sameState(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return!1;for(let e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(t){return this.p.parser.dialect.flags[t]}shiftContext(t,e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this,this.p.stream.reset(e)))}reduceContext(t,e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this,this.p.stream.reset(e)))}emitContext(){let t=this.buffer.length-1;(t<0||this.buffer[t]!=-3)&&this.buffer.push(this.curContext.hash,this.reducePos,this.reducePos,-3)}emitLookAhead(){let t=this.buffer.length-1;(t<0||this.buffer[t]!=-4)&&this.buffer.push(this.lookAhead,this.reducePos,this.reducePos,-4)}updateContext(t){if(t!=this.curContext.context){let e=new y(this.curContext.tracker,t);e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}setLookAhead(t){t>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=t)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class y{constructor(t,e){this.tracker=t,this.context=e,this.hash=t.strict?t.hash(e):0}}var N;(function(o){o[o.Insert=200]="Insert",o[o.Delete=190]="Delete",o[o.Reduce=100]="Reduce",o[o.MaxNext=4]="MaxNext",o[o.MaxInsertStackDepth=300]="MaxInsertStackDepth",o[o.DampenInsertStackDepth=120]="DampenInsertStackDepth",o[o.MinBigReduction=2e3]="MinBigReduction"})(N||(N={}));class W{constructor(t){this.start=t,this.state=t.state,this.stack=t.stack,this.base=this.stack.length}reduce(t){let e=t&65535,s=t>>19;s==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(s-1)*3;let i=this.start.p.parser.getGoto(this.stack[this.base-3],e,!0);this.state=i}}class C{constructor(t,e,s){this.stack=t,this.pos=e,this.index=s,this.buffer=t.buffer,this.index==0&&this.maybeNext()}static create(t,e=t.bufferBase+t.buffer.length){return new C(t,e,e-t.bufferBase)}maybeNext(){let t=this.stack.parent;t!=null&&(this.index=this.stack.bufferBase-t.bufferBase,this.stack=t,this.buffer=t.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new C(this.stack,this.pos,this.index)}}function x(o,t=Uint16Array){if(typeof o!="string")return o;let e=null;for(let s=0,i=0;s<o.length;){let h=0;for(;;){let r=o.charCodeAt(s++),n=!1;if(r==126){h=65535;break}r>=92&&r--,r>=34&&r--;let a=r-32;if(a>=46&&(a-=46,n=!0),h+=a,n)break;h*=46}e?e[i++]=h:e=new t(h)}return e}class S{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const D=new S;class q{constructor(t,e){this.input=t,this.ranges=e,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=D,this.rangeIndex=0,this.pos=this.chunkPos=e[0].from,this.range=e[0],this.end=e[e.length-1].to,this.readNext()}resolveOffset(t,e){let s=this.range,i=this.rangeIndex,h=this.pos+t;for(;h<s.from;){if(!i)return null;let r=this.ranges[--i];h-=s.from-r.to,s=r}for(;e<0?h>s.to:h>=s.to;){if(i==this.ranges.length-1)return null;let r=this.ranges[++i];h+=r.from-s.to,s=r}return h}clipPos(t){if(t>=this.range.from&&t<this.range.to)return t;for(let e of this.ranges)if(e.to>t)return Math.max(t,e.from);return this.end}peek(t){let e=this.chunkOff+t,s,i;if(e>=0&&e<this.chunk.length)s=this.pos+t,i=this.chunk.charCodeAt(e);else{let h=this.resolveOffset(t,1);if(h==null)return-1;if(s=h,s>=this.chunk2Pos&&s<this.chunk2Pos+this.chunk2.length)i=this.chunk2.charCodeAt(s-this.chunk2Pos);else{let r=this.rangeIndex,n=this.range;for(;n.to<=s;)n=this.ranges[++r];this.chunk2=this.input.chunk(this.chunk2Pos=s),s+this.chunk2.length>n.to&&(this.chunk2=this.chunk2.slice(0,n.to-s)),i=this.chunk2.charCodeAt(0)}}return s>=this.token.lookAhead&&(this.token.lookAhead=s+1),i}acceptToken(t,e=0){let s=e?this.resolveOffset(e,-1):this.pos;if(s==null||s<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=t,this.token.end=s}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:t,chunkPos:e}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=t,this.chunk2Pos=e,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let t=this.input.chunk(this.pos),e=this.pos+t.length;this.chunk=e>this.range.to?t.slice(0,this.range.to-this.pos):t,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(t=1){for(this.chunkOff+=t;this.pos+t>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();t-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=t,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(t,e){if(e?(this.token=e,e.start=t,e.lookAhead=t+1,e.value=e.extended=-1):this.token=D,this.pos!=t){if(this.pos=t,t==this.end)return this.setDone(),this;for(;t<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;t>=this.range.to;)this.range=this.ranges[++this.rangeIndex];t>=this.chunkPos&&t<this.chunkPos+this.chunk.length?this.chunkOff=t-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(t,e){if(t>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(t-this.chunkPos,e-this.chunkPos);if(t>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(t-this.chunk2Pos,e-this.chunk2Pos);if(t>=this.range.from&&e<=this.range.to)return this.input.read(t,e);let s="";for(let i of this.ranges){if(i.from>=e)break;i.to>t&&(s+=this.input.read(Math.max(i.from,t),Math.min(i.to,e)))}return s}}class m{constructor(t,e){this.data=t,this.id=e}token(t,e){let{parser:s}=e.p;F(this.data,t,e,this.id,s.data,s.tokenPrecTable)}}m.prototype.contextual=m.prototype.fallback=m.prototype.extend=!1;class J{constructor(t,e,s){this.precTable=e,this.elseToken=s,this.data=typeof t=="string"?x(t):t}token(t,e){let s=t.pos,i;for(;i=t.pos,F(this.data,t,e,0,this.data,this.precTable),!(t.token.value>-1);){if(this.elseToken==null)return;if(t.next<0)break;t.advance(),t.reset(i+1,t.token)}i>s&&(t.reset(s,t.token),t.acceptToken(this.elseToken,i-s))}}J.prototype.contextual=m.prototype.fallback=m.prototype.extend=!1;class tt{constructor(t,e={}){this.token=t,this.contextual=!!e.contextual,this.fallback=!!e.fallback,this.extend=!!e.extend}}function F(o,t,e,s,i,h){let r=0,n=1<<s,{dialect:a}=e.p.parser;t:for(;n&o[r];){let l=o[r+1];for(let p=r+3;p<l;p+=2)if((o[p+1]&n)>0){let d=o[p];if(a.allows(d)&&(t.token.value==-1||t.token.value==d||K(d,t.token.value,i,h))){t.acceptToken(d);break}}let f=t.next,u=0,c=o[r+2];if(t.next<0&&c>u&&o[l+c*3-3]==65535&&o[l+c*3-3]==65535){r=o[l+c*3-1];continue t}for(;u<c;){let p=u+c>>1,d=l+p+(p<<1),L=o[d],$=o[d+1]||65536;if(f<L)c=p;else if(f>=$)u=p+1;else{r=o[d+2],t.advance();continue t}}break}}function I(o,t,e){for(let s=t,i;(i=o[s])!=65535;s++)if(i==e)return s-t;return-1}function K(o,t,e,s){let i=I(e,s,t);return i<0||I(e,s,o)<i}const g=typeof process<"u"&&process.env&&/\bparse\b/.test({}.LOG);let A=null;var z;(function(o){o[o.Margin=25]="Margin"})(z||(z={}));function B(o,t,e){let s=o.cursor(H.IncludeAnonymous);for(s.moveTo(t);;)if(!(e<0?s.childBefore(t):s.childAfter(t)))for(;;){if((e<0?s.to<t:s.from>t)&&!s.type.isError)return e<0?Math.max(0,Math.min(s.to-1,t-25)):Math.min(o.length,Math.max(s.from+1,t+25));if(e<0?s.prevSibling():s.nextSibling())break;if(!s.parent())return e<0?0:o.length}}class Q{constructor(t,e){this.fragments=t,this.nodeSet=e,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(t){for(this.safeFrom=t.openStart?B(t.tree,t.from+t.offset,1)-t.offset:t.from,this.safeTo=t.openEnd?B(t.tree,t.to+t.offset,-1)-t.offset:t.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(t.tree),this.start.push(-t.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(t){if(t<this.nextStart)return null;for(;this.fragment&&this.safeTo<=t;)this.nextFragment();if(!this.fragment)return null;for(;;){let e=this.trees.length-1;if(e<0)return this.nextFragment(),null;let s=this.trees[e],i=this.index[e];if(i==s.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let h=s.children[i],r=this.start[e]+s.positions[i];if(r>t)return this.nextStart=r,null;if(h instanceof b){if(r==t){if(r<this.safeFrom)return null;let n=r+h.length;if(n<=this.safeTo){let a=h.prop(w.lookAhead);if(!a||n+a<this.fragment.to)return h}}this.index[e]++,r+h.length>=Math.max(this.safeFrom,t)&&(this.trees.push(h),this.start.push(r),this.index.push(0))}else this.index[e]++,this.nextStart=r+h.length}}}class V{constructor(t,e){this.stream=e,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=t.tokenizers.map(s=>new S)}getActions(t){let e=0,s=null,{parser:i}=t.p,{tokenizers:h}=i,r=i.stateSlot(t.state,3),n=t.curContext?t.curContext.hash:0,a=0;for(let l=0;l<h.length;l++){if(!(1<<l&r))continue;let f=h[l],u=this.tokens[l];if(!(s&&!f.fallback)&&((f.contextual||u.start!=t.pos||u.mask!=r||u.context!=n)&&(this.updateCachedToken(u,f,t),u.mask=r,u.context=n),u.lookAhead>u.end+25&&(a=Math.max(u.lookAhead,a)),u.value!=0)){let c=e;if(u.extended>-1&&(e=this.addActions(t,u.extended,u.end,e)),e=this.addActions(t,u.value,u.end,e),!f.extend&&(s=u,e>c))break}}for(;this.actions.length>e;)this.actions.pop();return a&&t.setLookAhead(a),!s&&t.pos==this.stream.end&&(s=new S,s.value=t.p.parser.eofTerm,s.start=s.end=t.pos,e=this.addActions(t,s.value,s.end,e)),this.mainToken=s,this.actions}getMainToken(t){if(this.mainToken)return this.mainToken;let e=new S,{pos:s,p:i}=t;return e.start=s,e.end=Math.min(s+1,i.stream.end),e.value=s==i.stream.end?i.parser.eofTerm:0,e}updateCachedToken(t,e,s){let i=this.stream.clipPos(s.pos);if(e.token(this.stream.reset(i,t),s),t.value>-1){let{parser:h}=s.p;for(let r=0;r<h.specialized.length;r++)if(h.specialized[r]==t.value){let n=h.specializers[r](this.stream.read(t.start,t.end),s);if(n>=0&&s.p.parser.dialect.allows(n>>1)){n&1?t.extended=n>>1:t.value=n>>1;break}}}else t.value=0,t.end=this.stream.clipPos(i+1)}putAction(t,e,s,i){for(let h=0;h<i;h+=3)if(this.actions[h]==t)return i;return this.actions[i++]=t,this.actions[i++]=e,this.actions[i++]=s,i}addActions(t,e,s,i){let{state:h}=t,{parser:r}=t.p,{data:n}=r;for(let a=0;a<2;a++)for(let l=r.stateSlot(h,a?2:1);;l+=3){if(n[l]==65535)if(n[l+1]==1)l=k(n,l+2);else{i==0&&n[l+1]==2&&(i=this.putAction(k(n,l+2),e,s,i));break}n[l]==e&&(i=this.putAction(k(n,l+1),e,s,i))}return i}}var M;(function(o){o[o.Distance=5]="Distance",o[o.MaxRemainingPerStep=3]="MaxRemainingPerStep",o[o.MinBufferLengthPrune=500]="MinBufferLengthPrune",o[o.ForceReduceLimit=10]="ForceReduceLimit",o[o.CutDepth=15e3]="CutDepth",o[o.CutTo=9e3]="CutTo",o[o.MaxLeftAssociativeReductionCount=300]="MaxLeftAssociativeReductionCount",o[o.MaxStackCount=12]="MaxStackCount"})(M||(M={}));class X{constructor(t,e,s,i){this.parser=t,this.input=e,this.ranges=i,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new q(e,i),this.tokens=new V(t,this.stream),this.topTerm=t.top[1];let{from:h}=i[0];this.stacks=[P.start(this,t.top[0],h)],this.fragments=s.length&&this.stream.end-h>t.bufferLength*4?new Q(s,t.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let t=this.stacks,e=this.minStackPos,s=this.stacks=[],i,h;if(this.bigReductionCount>300&&t.length==1){let[r]=t;for(;r.forceReduce()&&r.stack.length&&r.stack[r.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let r=0;r<t.length;r++){let n=t[r];for(;;){if(this.tokens.mainToken=null,n.pos>e)s.push(n);else{if(this.advanceStack(n,s,t))continue;{i||(i=[],h=[]),i.push(n);let a=this.tokens.getMainToken(n);h.push(a.value,a.end)}}break}}if(!s.length){let r=i&&Z(i);if(r)return this.stackToTree(r);if(this.parser.strict)throw g&&i&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+e);this.recovering||(this.recovering=5)}if(this.recovering&&i){let r=this.stoppedAt!=null&&i[0].pos>this.stoppedAt?i[0]:this.runRecovery(i,h,s);if(r)return this.stackToTree(r.forceAll())}if(this.recovering){let r=this.recovering==1?1:this.recovering*3;if(s.length>r)for(s.sort((n,a)=>a.score-n.score);s.length>r;)s.pop();s.some(n=>n.reducePos>e)&&this.recovering--}else if(s.length>1){t:for(let r=0;r<s.length-1;r++){let n=s[r];for(let a=r+1;a<s.length;a++){let l=s[a];if(n.sameState(l)||n.buffer.length>500&&l.buffer.length>500)if((n.score-l.score||n.buffer.length-l.buffer.length)>0)s.splice(a--,1);else{s.splice(r--,1);continue t}}}s.length>12&&s.splice(12,s.length-12)}this.minStackPos=s[0].pos;for(let r=1;r<s.length;r++)s[r].pos<this.minStackPos&&(this.minStackPos=s[r].pos);return null}stopAt(t){if(this.stoppedAt!=null&&this.stoppedAt<t)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=t}advanceStack(t,e,s){let i=t.pos,{parser:h}=this,r=g?this.stackID(t)+" -> ":"";if(this.stoppedAt!=null&&i>this.stoppedAt)return t.forceReduce()?t:null;if(this.fragments){let l=t.curContext&&t.curContext.tracker.strict,f=l?t.curContext.hash:0;for(let u=this.fragments.nodeAt(i);u;){let c=this.parser.nodeSet.types[u.type.id]==u.type?h.getGoto(t.state,u.type.id):-1;if(c>-1&&u.length&&(!l||(u.prop(w.contextHash)||0)==f))return t.useNode(u,c),g&&console.log(r+this.stackID(t)+` (via reuse of ${h.getName(u.type.id)})`),!0;if(!(u instanceof b)||u.children.length==0||u.positions[0]>0)break;let p=u.children[0];if(p instanceof b&&u.positions[0]==0)u=p;else break}}let n=h.stateSlot(t.state,4);if(n>0)return t.reduce(n),g&&console.log(r+this.stackID(t)+` (via always-reduce ${h.getName(n&65535)})`),!0;if(t.stack.length>=15e3)for(;t.stack.length>9e3&&t.forceReduce(););let a=this.tokens.getActions(t);for(let l=0;l<a.length;){let f=a[l++],u=a[l++],c=a[l++],p=l==a.length||!s,d=p?t:t.split();if(d.apply(f,u,c),g&&console.log(r+this.stackID(d)+` (via ${f&65536?`reduce of ${h.getName(f&65535)}`:"shift"} for ${h.getName(u)} @ ${i}${d==t?"":", split"})`),p)return!0;d.pos>i?e.push(d):s.push(d)}return!1}advanceFully(t,e){let s=t.pos;for(;;){if(!this.advanceStack(t,null,null))return!1;if(t.pos>s)return R(t,e),!0}}runRecovery(t,e,s){let i=null,h=!1;for(let r=0;r<t.length;r++){let n=t[r],a=e[r<<1],l=e[(r<<1)+1],f=g?this.stackID(n)+" -> ":"";if(n.deadEnd&&(h||(h=!0,n.restart(),g&&console.log(f+this.stackID(n)+" (restarted)"),this.advanceFully(n,s))))continue;let u=n.split(),c=f;for(let p=0;u.forceReduce()&&p<10&&(g&&console.log(c+this.stackID(u)+" (via force-reduce)"),!this.advanceFully(u,s));p++)g&&(c=this.stackID(u)+" -> ");for(let p of n.recoverByInsert(a))g&&console.log(f+this.stackID(p)+" (via recover-insert)"),this.advanceFully(p,s);this.stream.end>n.pos?(l==n.pos&&(l++,a=0),n.recoverByDelete(a,l),g&&console.log(f+this.stackID(n)+` (via recover-delete ${this.parser.getName(a)})`),R(n,s)):(!i||i.score<n.score)&&(i=n)}return i}stackToTree(t){return t.close(),b.build({buffer:C.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:t.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(t){let e=(A||(A=new WeakMap)).get(t);return e||A.set(t,e=String.fromCodePoint(this.nextStackID++)),e+t}}function R(o,t){for(let e=0;e<t.length;e++){let s=t[e];if(s.pos==o.pos&&s.sameState(o)){t[e].score<o.score&&(t[e]=o);return}}t.push(o)}class Y{constructor(t,e,s){this.source=t,this.flags=e,this.disabled=s}allows(t){return!this.disabled||this.disabled[t]==0}}const T=o=>o;class et{constructor(t){this.start=t.start,this.shift=t.shift||T,this.reduce=t.reduce||T,this.reuse=t.reuse||T,this.hash=t.hash||(()=>0),this.strict=t.strict!==!1}}class v extends j{constructor(t){if(super(),this.wrappers=[],t.version!=14)throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);let e=t.nodeNames.split(" ");this.minRepeatTerm=e.length;for(let n=0;n<t.repeatNodeCount;n++)e.push("");let s=Object.keys(t.topRules).map(n=>t.topRules[n][1]),i=[];for(let n=0;n<e.length;n++)i.push([]);function h(n,a,l){i[n].push([a,a.deserialize(String(l))])}if(t.nodeProps)for(let n of t.nodeProps){let a=n[0];typeof a=="string"&&(a=w[a]);for(let l=1;l<n.length;){let f=n[l++];if(f>=0)h(f,a,n[l++]);else{let u=n[l+-f];for(let c=-f;c>0;c--)h(n[l++],a,u);l++}}}this.nodeSet=new G(e.map((n,a)=>E.define({name:a>=this.minRepeatTerm?void 0:n,id:a,props:i[a],top:s.indexOf(a)>-1,error:a==0,skipped:t.skippedNodes&&t.skippedNodes.indexOf(a)>-1}))),t.propSources&&(this.nodeSet=this.nodeSet.extend(...t.propSources)),this.strict=!1,this.bufferLength=U;let r=x(t.tokenData);this.context=t.context,this.specializerSpecs=t.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let n=0;n<this.specializerSpecs.length;n++)this.specialized[n]=this.specializerSpecs[n].term;this.specializers=this.specializerSpecs.map(O),this.states=x(t.states,Uint32Array),this.data=x(t.stateData),this.goto=x(t.goto),this.maxTerm=t.maxTerm,this.tokenizers=t.tokenizers.map(n=>typeof n=="number"?new m(r,n):n),this.topRules=t.topRules,this.dialects=t.dialects||{},this.dynamicPrecedences=t.dynamicPrecedences||null,this.tokenPrecTable=t.tokenPrec,this.termNames=t.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(t,e,s){let i=new X(this,t,e,s);for(let h of this.wrappers)i=h(i,t,e,s);return i}getGoto(t,e,s=!1){let i=this.goto;if(e>=i[0])return-1;for(let h=i[e+1];;){let r=i[h++],n=r&1,a=i[h++];if(n&&s)return a;for(let l=h+(r>>1);h<l;h++)if(i[h]==t)return a;if(n)return-1}}hasAction(t,e){let s=this.data;for(let i=0;i<2;i++)for(let h=this.stateSlot(t,i?2:1),r;;h+=3){if((r=s[h])==65535)if(s[h+1]==1)r=s[h=k(s,h+2)];else{if(s[h+1]==2)return k(s,h+2);break}if(r==e||r==0)return k(s,h+1)}return 0}stateSlot(t,e){return this.states[t*6+e]}stateFlag(t,e){return(this.stateSlot(t,0)&e)>0}validAction(t,e){if(e==this.stateSlot(t,4))return!0;for(let s=this.stateSlot(t,1);;s+=3){if(this.data[s]==65535)if(this.data[s+1]==1)s=k(this.data,s+2);else return!1;if(e==k(this.data,s+1))return!0}}nextStates(t){let e=[];for(let s=this.stateSlot(t,1);;s+=3){if(this.data[s]==65535)if(this.data[s+1]==1)s=k(this.data,s+2);else break;if(!(this.data[s+2]&1)){let i=this.data[s+1];e.some((h,r)=>r&1&&h==i)||e.push(this.data[s],i)}}return e}configure(t){let e=Object.assign(Object.create(v.prototype),this);if(t.props&&(e.nodeSet=this.nodeSet.extend(...t.props)),t.top){let s=this.topRules[t.top];if(!s)throw new RangeError(`Invalid top rule name ${t.top}`);e.top=s}return t.tokenizers&&(e.tokenizers=this.tokenizers.map(s=>{let i=t.tokenizers.find(h=>h.from==s);return i?i.to:s})),t.specializers&&(e.specializers=this.specializers.slice(),e.specializerSpecs=this.specializerSpecs.map((s,i)=>{let h=t.specializers.find(n=>n.from==s.external);if(!h)return s;let r=Object.assign(Object.assign({},s),{external:h.to});return e.specializers[i]=O(r),r})),t.contextTracker&&(e.context=t.contextTracker),t.dialect&&(e.dialect=this.parseDialect(t.dialect)),t.strict!=null&&(e.strict=t.strict),t.wrap&&(e.wrappers=e.wrappers.concat(t.wrap)),t.bufferLength!=null&&(e.bufferLength=t.bufferLength),e}hasWrappers(){return this.wrappers.length>0}getName(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(t){let e=this.dynamicPrecedences;return e==null?0:e[t]||0}parseDialect(t){let e=Object.keys(this.dialects),s=e.map(()=>!1);if(t)for(let h of t.split(" ")){let r=e.indexOf(h);r>=0&&(s[r]=!0)}let i=null;for(let h=0;h<e.length;h++)if(!s[h])for(let r=this.dialects[e[h]],n;(n=this.data[r++])!=65535;)(i||(i=new Uint8Array(this.maxTerm+1)))[n]=1;return new Y(t,s,i)}static deserialize(t){return new v(t)}}function k(o,t){return o[t]|o[t+1]<<16}function Z(o){let t=null;for(let e of o){let s=e.p.stoppedAt;(e.pos==e.p.stream.end||s!=null&&e.pos>s)&&e.p.parser.stateFlag(e.state,2)&&(!t||t.score<e.score)&&(t=e)}return t}function O(o){if(o.external){let t=o.extend?1:0;return(e,s)=>o.external(e,s)<<1|t}return o.get}export{et as C,tt as E,v as L,J as a};
