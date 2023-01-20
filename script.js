//1.How to compare two JSON have the same properties without order?
//a. let obj1={name: "Person 1", age :5};
//b. let obj2={age:5, name: "Person 1"};
let obj1 = {
    name: "Person 1",
    age: 5
  };
  let obj2 = {
    age: 5,
    name: "Person1"
  };
  console.log(JSON.stringify(obj1) !== JSON.stringify(obj2));

  //2.countriesFlags = {
  "Afghanistan": {"png":"https://mainfacts.com/media/images/coats_of_arms/af.png","svg":"https://mainfacts.com/media/images/coats_of_arms/af.svg"}
  "Albania": {"png":"https://flagcdn.com/w320/al.png","svg":"https://flagcdn.com/al.svg"}
  "Algeria": {"png":"https://flagcdn.com/w320/dz.png","svg":"https://flagcdn.com/dz.svg"}
  "Andorra": {"png":"https://flagcdn.com/w320/ad.png","svg":"https://flagcdn.com/ad.svg"}
  "Angola": {"png":"https://flagcdn.com/w320/ao.png","svg":"https://flagcdn.com/ao.svg"}
  "Argentina": {"png":"https://flagcdn.com/w320/ar.png","svg":"https://flagcdn.com/ar.svg"}
  "Armenia": {"png":"https://flagcdn.com/w320/am.png","svg":"https://flagcdn.com/am.svg"}
  "Australia": {"png":"https://flagcdn.com/w320/au.png","svg":"https://flagcdn.com/au.svg"}
  "Austria": {"png":"https://flagcdn.com/w320/at.png","svg":"https://flagcdn.com/at.svg"}
  "Azerbaijan": {"png":"https://flagcdn.com/w320/az.png","svg":"https://flagcdn.com/az.svg"}
  "Bahamas": {"png":"https://flagcdn.com/w320/bs.png","svg":"https://flagcdn.com/bs.svg"}
  "Bahrain": {"png":"https://flagcdn.com/w320/bh.png","svg":"https://flagcdn.com/bh.svg"}
  "Bangladesh": {"png":"https://flagcdn.com/w320/bd.png","svg":"https://flagcdn.com/bd.svg"}
  "Barbados": {"png":"https://flagcdn.com/w320/bb.png","svg":"https://flagcdn.com/bb.svg"}
  "Belarus": {"png":"https://flagcdn.com/w320/by.png","svg":"https://flagcdn.com/by.svg"}
  "Belgium": {"png":"https://flagcdn.com/w320/be.png","svg":"https://flagcdn.com/be.svg"}
  "Belize": {"png":"https://flagcdn.com/w320/bz.png","svg":"https://flagcdn.com/bz.svg"}
  "Benin": {"png":"https://flagcdn.com/w320/bj.png","svg":"https://flagcdn.com/bj.svg"}
  "Bhutan": {"png":"https://flagcdn.com/w320/bt.png","svg":"https://flagcdn.com/bt.svg"}
  "Bolivia": {"png":"https://flagcdn.com/w320/bo.png","svg":"https://flagcdn.com/bo.svg"}
  "Botswana":{"png":"https://flagcdn.com/w320/bw.png","svg":"https://flagcdn.com/bw.svg"}
  "Brazil": {"png":"https://flagcdn.com/w320/br.png","svg":"https://flagcdn.com/br.svg"}
  "Brunei":  {"png":"https://flagcdn.com/w320/bn.png","svg":"https://flagcdn.com/bn.svg"}
  "Bulgaria" : {"png":"https://flagcdn.com/w320/bg.png","svg":"https://flagcdn.com/bg.svg"}
  "Burkina": {"png":"https://flagcdn.com/w320/bf.png","svg":"https://flagcdn.com/bf.svg"}
  "Burundi": {"png":"https://flagcdn.com/w320/bi.png","svg":"https://flagcdn.com/bi.svg"}
  "Cambodia": {"png":"https://flagcdn.com/w320/kh.png","svg":"https://flagcdn.com/kh.svg"}
  "Cameroon": {"png":"https://flagcdn.com/w320/cm.png","svg":"https://flagcdn.com/cm.svg"}
  "Canada": {"png":"https://flagcdn.com/w320/ca.png","svg":"https://flagcdn.com/ca.svg"}
  "CAR": {"png":"https://flagcdn.com/w320/gd.png","svg":"https://flagcdn.com/gd.svg"}
  "Chad": {"png":"https://flagcdn.com/w320/td.png","svg":"https://flagcdn.com/td.svg"}
  "Chile": {"png":"https://flagcdn.com/w320/cl.png","svg":"https://flagcdn.com/cl.svg"}
  "Colombia": {"png":"https://flagcdn.com/w320/co.png","svg":"https://flagcdn.com/co.svg"}
  "Comoros": {"png":"https://flagcdn.com/w320/km.png","svg":"https://flagcdn.com/km.svg"}
  "Croatia": {"png":"https://flagcdn.com/w320/hr.png","svg":"https://flagcdn.com/hr.svg"}
  "Cuba": {"png":"https://flagcdn.com/w320/cu.png","svg":"https://flagcdn.com/cu.svg"}
  "Cyprus": {"png":"https://flagcdn.com/w320/cy.png","svg":"https://flagcdn.com/cy.svg"}
  "Czech":  {"png":"https://flagcdn.com/w320/cz.png","svg":"https://flagcdn.com/cz.svg"}
  "DRC": {"png":"https://flagcdn.com/w320/cd.png","svg":"https://flagcdn.com/cd.svg"}
  "Denmark": {"png":"https://flagcdn.com/w320/dk.png","svg":"https://flagcdn.com/dk.svg"}
  "Djibouti": {"png":"https://flagcdn.com/w320/dj.png","svg":"https://flagcdn.com/dj.svg"}
  "Dominica": {"png":"https://flagcdn.com/w320/dm.png","svg":"https://flagcdn.com/dm.svg"}
  "Ecuador": {"png":"https://flagcdn.com/w320/ec.png","svg":"https://flagcdn.com/ec.svg"}
  "Egypt": {"png":"https://flagcdn.com/w320/eg.png","svg":"https://flagcdn.com/eg.svg"}
  "Salvador": {"png":"https://flagcdn.com/w320/sv.png","svg":"https://flagcdn.com/sv.svg"}
  "Guinea": {"png":"https://flagcdn.com/w320/gn.png","svg":"https://flagcdn.com/gn.svg"}
  "Eritrea" : {"png":"https://flagcdn.com/w320/er.png","svg":"https://flagcdn.com/er.svg"}
  "Estonia":{"png":"https://flagcdn.com/w320/ee.png","svg":"https://flagcdn.com/ee.svg"}
  "Ethiopia": {"png":"https://flagcdn.com/w320/et.png","svg":"https://flagcdn.com/et.svg"}
  "Fiji": {"png":"https://flagcdn.com/w320/fj.png","svg":"https://flagcdn.com/fj.svg"}
  "Finland" : {"png":"https://flagcdn.com/w320/fi.png","svg":"https://flagcdn.com/fi.svg"}
  "France": {"png":"https://flagcdn.com/w320/fr.png","svg":"https://flagcdn.com/fr.svg"}
  "Gabon": {"png":"https://flagcdn.com/w320/ga.png","svg":"https://flagcdn.com/ga.svg"}
  "Gambia": {"png":"https://flagcdn.com/w320/gm.png","svg":"https://flagcdn.com/gm.svg"}
  "Georgia": {"png":"https://flagcdn.com/w320/ge.png","svg":"https://flagcdn.com/ge.svg"}
  "Germany": {"png":"https://flagcdn.com/w320/de.png","svg":"https://flagcdn.com/de.svg"}
  "Ghana":{"png":"https://flagcdn.com/w320/gh.png","svg":"https://flagcdn.com/gh.svg"}
  "Greece": {"png":"https://flagcdn.com/w320/gr.png","svg":"https://flagcdn.com/gr.svg"}
  "Grenada": {"png":"https://flagcdn.com/w320/gd.png","svg":"https://flagcdn.com/gd.svg"}
  "Guatemala": {"png":"https://flagcdn.com/w320/gt.png","svg":"https://flagcdn.com/gt.svg"}
  "Guinean": {"png":"https://flagcdn.com/w320/gn.pnog","svg":"https://flagcdn.com/gn.svg"}
  "Guyana" : {"png":"https://flagcdn.com/w320/gf.png","svg":"https://flagcdn.com/gf.svg"}
  "Haiti":{"png":"https://flagcdn.com/w320/ht.png","svg":"https://flagcdn.com/ht.svg"}
  "Honduras": {"png":"https://flagcdn.com/w320/hn.png","svg":"https://flagcdn.com/hn.svg"}
  "Hungary": {"png":"https://flagcdn.com/w320/hu.png","svg":"https://flagcdn.com/hu.svg"}
  "Iceland": {"png":"https://flagcdn.com/w320/is.png","svg":"https://flagcdn.com/is.svg"}
  "India": {"png":"https://flagcdn.com/w320/in.png","svg":"https://flagcdn.com/in.svg"}
  "Indonesia": {"png":"https://flagcdn.com/w320/id.png","svg":"https://flagcdn.com/id.svg"}
  "Iran": {"png":"https://flagcdn.com/w320/ir.png","svg":"https://flagcdn.com/ir.svg"}
  "Iraq": {"png":"https://flagcdn.com/w320/iq.png","svg":"https://flagcdn.com/iq.svg"}
  "Ireland": {"png":"https://flagcdn.com/w320/ie.png","svg":"https://flagcdn.com/ie.svg"}
  "Israel": {"png":"https://flagcdn.com/w320/il.png","svg":"https://flagcdn.com/il.svg"}
  "Italy": {"png":"https://flagcdn.com/w320/it.png","svg":"https://flagcdn.com/it.svg"}
  "Jamaica": {"png":"https://flagcdn.com/w320/jm.png","svg":"https://flagcdn.com/jm.svg"}
  "Japan": {"png":"https://flagcdn.com/w320/jp.png","svg":"https://flagcdn.com/jp.svg"}
  "Jordan":  {"png":"https://flagcdn.com/w320/jo.png","svg":"https://flagcdn.com/jo.svg"}
  "Kazakhstan": {"png":"https://flagcdn.com/w320/kz.png","svg":"https://flagcdn.com/kz.svg"}
  "Kenya": {"png":"https://flagcdn.com/w320/ke.png","svg":"https://flagcdn.com/ke.svg"}
  "Kiribati": {"png":"https://flagcdn.com/w320/ki.png","svg":"https://flagcdn.com/ki.svg"}
  "Kosovo": {"png":"https://flagcdn.com/w320/xk.png","svg":"https://flagcdn.com/xk.svg"}
  "Kuwait": {"png":"https://flagcdn.com/w320/kw.png","svg":"https://flagcdn.com/kw.svg"}
  "Kyrgyzstan" : {"png":"https://flagcdn.com/w320/kg.png","svg":"https://flagcdn.com/kg.svg"}
  "Laos": {"png":"https://flagcdn.com/w320/la.png","svg":"https://flagcdn.com/la.svg"}
  "Latvia": {"png":"https://flagcdn.com/w320/lv.png","svg":"https://flagcdn.com/lv.svg"}
  "Lebanon": {"png":"https://flagcdn.com/w320/lb.png","svg":"https://flagcdn.com/lb.svg"}
  "Lesotho": {"png":"https://flagcdn.com/w320/ls.png","svg":"https://flagcdn.com/ls.svg"}
  "Liberia": {"png":"https://flagcdn.com/w320/lr.png","svg":"https://flagcdn.com/lr.svg"}
  "Libya": {"png":"https://flagcdn.com/w320/ly.png","svg":"https://flagcdn.com/ly.svg"}
  "Liechtenstein": {"png":"https://flagcdn.com/w320/li.png","svg":"https://flagcdn.com/li.svg"}
  "Lithuania": {"png":"https://flagcdn.com/w320/lt.png","svg":"https://flagcdn.com/lt.svg"}
  "Luxembourg": {"png":"https://flagcdn.com/w320/lu.png","svg":"https://flagcdn.com/lu.svg"}
  "Madagascar": {"png":"https://flagcdn.com/w320/mg.png","svg":"https://flagcdn.com/mg.svg"}
  "Malawi": {"png":"https://flagcdn.com/w320/mw.png","svg":"https://flagcdn.com/mw.svg"}
  "Malaysia": {"png":"https://flagcdn.com/w320/my.png","svg":"https://flagcdn.com/my.svg"}
  "Maldives": {"png":"https://flagcdn.com/w320/mv.png","svg":"https://flagcdn.com/mv.svg"}
  "Mali": {"png":"https://flagcdn.com/w320/ml.png","svg":"https://flagcdn.com/ml.svg"}
  "Malta": {"png":"https://flagcdn.com/w320/mt.png","svg":"https://flagcdn.com/mt.svg"}
  "Mauritania": {"png":"https://flagcdn.com/w320/mr.png","svg":"https://flagcdn.com/mr.svg"}
  "Mauritius": {"png":"https://flagcdn.com/w320/mu.png","svg":"https://flagcdn.com/mu.svg"}
  "Mexico": {"png":"https://flagcdn.com/w320/mx.png","svg":"https://flagcdn.com/mx.svg"}
  "Micronesia": {"png":"https://flagcdn.com/w320/pw.png","svg":"https://flagcdn.com/pw.svg"}
  "Moldova": {"png":"https://flagcdn.com/w320ee/md.png","svg":"https://flagcdn.com/md.svg"}
  "Monaco":{"png":"https://flagcdn.com/w320/mc.png","svg":"https://flagcdn.com/mc.svg"}
  "Mongolia": {"png":"https://flagcdn.com/w320/mn.png","svg":"https://flagcdn.com/mn.svg"}
  "Montenegro": {"png":"https://flagcdn.com/w320/me.png","svg":"https://flagcdn.com/me.svg"}
  "Morocco": {"png":"https://flagcdn.com/w320/ma.png","svg":"https://flagcdn.com/ma.svg"}
  "Mozambique": {"png":"https://flagcdn.com/w320/mz.png","svg":"https://flagcdn.com/mz.svg"}
  "Myanmar": {"png":"https://flagcdn.com/w320/mm.png","svg":"https://flagcdn.com/mm.svg"}
  "Namibia": {"png":"https://flagcdn.com/w320/na.png","svg":"https://flagcdn.com/na.svg"}
  "Nauru": {"png":"https://flagcdn.com/w320/nr.png","svg":"https://flagcdn.com/nr.svg"}
  "Nepal": {"png":"https://flagcdn.com/w320/np.png","svg":"https://flagcdn.com/np.svg"}
  "Netherlands": {"png":"https://flagcdn.com/w320/nl.png","svg":"https://flagcdn.com/nl.svg"}
  "Mali": {"png":"https://flagcdn.com/w320/ml.png","svg":"https://flagcdn.com/ml.svg"}
  "Nicaragua":{"png":"https://flagcdn.com/w320/ni.png","svg":"https://flagcdn.com/ni.svg"}
  "Niger": {"png":"https://flagcdn.com/w320/ne.png","svg":"https://flagcdn.com/ne.svg"}
  "Nigeria": {"png":"https://flagcdn.com/w320/ng.png","svg":"https://flagcdn.com/ng.svg"}
  "Niue": {"png":"https://flagcdn.com/w320/nu.png","svg":"https://flagcdn.com/nu.svg"}
  "North Korea" : {"png":"https://flagcdn.com/w320/kp.png","svg":"https://flagcdn.com/kp.svg"}
  "Norway": {"png":"https://flagcdn.com/w320/no.png","svg":"https://flagcdn.com/no.svg"}
  "Oman": {"png":"https://flagcdn.com/w320/om.png","svg":"https://flagcdn.com/om.svg"}
  "Pakistan": {"png":"https://flagcdn.com/w320/pk.png","svg":"https://flagcdn.com/pk.svg"}
  "Palau": {"png":"https://flagcdn.com/w320/pw.png","svg":"https://flagcdn.com/pw.svg"}
  "Panama": {"png":"https://flagcdn.com/w320/pa.png","svg":"https://flagcdn.com/pa.svg"}
  "Paraguay" : {"png":"https://flagcdn.com/w320/py.png","svg":"https://flagcdn.com/py.svg"}
  "China": {"png":"https://flagcdn.com/w320/cn.png","svg":"https://flagcdn.com/cn.svg"}
  "Peru": {"png":"https://flagcdn.com/w320/pe.png","svg":"https://flagcdn.com/pe.svg"}
  "Philippines": {"png":"https://flagcdn.com/w320/ph.png","svg":"https://flagcdn.com/ph.svg"}
  "Poland": {"png":"https://flagcdn.com/w320/pl.png","svg":"https://flagcdn.com/pl.svg"}
  "Portugal": {"png":"https://flagcdn.com/w320/pt.png","svg":"https://flagcdn.com/pt.svg"}
  "Qatar": {"png":"https://flagcdn.com/w320/qa.png","svg":"https://flagcdn.com/qa.svg"}
  "Taiwan" : {"png":"https://flagcdn.com/w320/tw.png","svg":"https://flagcdn.com/tw.svg"}
  "Kyrgyzstan" : {"png":"https://flagcdn.com/w320/kg.png","svg":"https://flagcdn.com/kg.svg"}
  "Romania" : {"png":"https://flagcdn.com/w320/ro.png","svg":"https://flagcdn.com/ro.svg"}
  "Russia": {"png":"https://flagcdn.com/w320/ru.png","svg":"https://flagcdn.com/ru.svg"}
  "Rwanda": {"png":"https://flagcdn.com/w320/rw.png","svg":"https://flagcdn.com/rw.svg"}
  "Saint Kitts and Nevis" : {"png":"https://flagcdn.com/w320/kn.png","svg":"https://flagcdn.com/kn.svg"}
  "Sierra Leone" : {"png":"https://flagcdn.com/w320/sl.png","svg":"https://flagcdn.com/sl.svg"}
   "Samoa": {"png":"https://flagcdn.com/w320/ws.png","svg":"https://flagcdn.com/ws.svg"}
  "San Marino" : {"png":"https://flagcdn.com/w320/sm.png","svg":"https://flagcdn.com/sm.svg"}
  "Switzerland" :{"png":"https://flagcdn.com/w320/ch.png","svg":"https://flagcdn.com/ch.svg"}
  "Senegal": {"png":"https://flagcdn.com/w320/sn.png","svg":"https://flagcdn.com/sn.svg"}
  "Serbia": {"png":"https://flagcdn.com/w320/rs.png","svg":"https://flagcdn.com/rs.svg"}
  "Seychelles": {"png":"https://flagcdn.com/w320/sc.png","svg":"https://flagcdn.com/sc.svg"}
  "Singapore": {"png":"https://flagcdn.com/w320/sg.png","svg":"https://flagcdn.com/sg.svg"}
  "Slovakia": {"png":"https://flagcdn.com/w320/sk.png","svg":"https://flagcdn.com/sk.svg"}
  "Slovenia":{"png":"https://flagcdn.com/w320/si.png","svg":"https://flagcdn.com/si.svg"}
  "Somalia":{"png":"https://flagcdn.com/w320/so.png","svg":"https://flagcdn.com/so.svg"}
  "South African" :{"png":"https://flagcdn.com/w320/za.png","svg":"https://flagcdn.com/za.svg"}
  "South korea" : "png":"https://flagcdn.com/w320/kr.png","svg":"https://flagcdn.com/kr.svg"}
  "Sudan" : {"png":"https://flagcdn.com/w320/sd.png","svg":"https://flagcdn.com/sd.svg"}
  "Spain": {"png":"https://flagcdn.com/w320/es.png","svg":"https://flagcdn.com/es.svg"}
  "sri Lanka": {"png":"https://flagcdn.com/w320/lk.png","svg":"https://flagcdn.com/lk.svg"}
  "Suriname": {"png":"https://flagcdn.com/w320/sr.png","svg":"https://flagcdn.com/sr.svg"}
  "Swaziland": {"png":"https://flagcdn.com/w320/sz.png","svg":"https://flagcdn.com/sz.svg"}
  "Sweden": {"png":"https://flagcdn.com/w320/se.png","svg":"https://flagcdn.com/se.svg"}
  "Switzerland" : {"png":"https://flagcdn.com/w320/ch.png","svg":"https://flagcdn.com/ch.svg"}
  "Syria": {"png":"https://flagcdn.com/w320/sy.png","svg":"https://flagcdn.com/sy.svg"}
  "Tajikistan": {"png":"https://flagcdn.com/w320/tj.png","svg":"https://flagcdn.com/tj.svg"}
  "Tanzania": {"png":"https://flagcdn.com/w320/tz.png","svg":"https://flagcdn.com/tz.svg"}
  "Thailand": {"png":"https://flagcdn.com/w320/th.png","svg":"https://flagcdn.com/th.svg"}
  "Togo": {"png":"https://flagcdn.com/w320/tg.png","svg":"https://flagcdn.com/tg.svg"}
  "Trinidad and Tobago": {"png":"https://flagcdn.com/w320/tt.png","svg":"https://flagcdn.com/tt.svg"}
  "Tunisia" : {"png":"https://flagcdn.com/w320/tn.png","svg":"https://flagcdn.com/tn.svg"}
  "Turkey": {"png":"https://flagcdn.com/w320/tr.png","svg":"https://flagcdn.com/tr.svg"}
  "Turkmenistan": {"png":"https://flagcdn.com/w320/tm.png","svg":"https://flagcdn.com/tm.svg"}
  "Tuvalu": {"png":"https://flagcdn.com/w320/tv.png","svg":"https://flagcdn.com/tv.svg"}
  "Uganda": {"png":"https://flagcdn.com/w320/ug.png","svg":"https://flagcdn.com/ug.svg"}
  "Ukraine": {"png":"https://flagcdn.com/w320/ua.png","svg":"https://flagcdn.com/ua.svg"}
  "United Arab Emirates" : {"png":"https://flagcdn.com/w320/ae.png","svg":"https://flagcdn.com/ae.svg"}
  "United Kingdom" : {"png":"https://flagcdn.com/w320/gb.png","svg":"https://flagcdn.com/gb.svg"}
  "USA": {"png":"https://flagcdn.com/w320/vi.png","svg":"https://flagcdn.com/vi.svg"}
  "Uruguay": {"png":"https://flagcdn.com/w320/uy.png","svg":"https://flagcdn.com/uy.svg"}
  "Uzbekistan": {"png":"https://flagcdn.com/w320/uz.png","svg":"https://flagcdn.com/uz.svg"}
  "Vanuatu": {"png":"https://flagcdn.com/w320/vu.png","svg":"https://flagcdn.com/vu.svg"}
  "Vatican":{"png":"https://flagcdn.com/w320/fr.png","svg":"https://flagcdn.com/fr.svg"}
  "Venezuela": {"png":"https://flagcdn.com/w320/ve.png","svg":"https://flagcdn.com/ve.svg"}
  "Vietnam":{"png":"https://flagcdn.com/w320/vn.png","svg":"https://flagcdn.com/vn.svg"}
  "Yemen": {"png":"https://flagcdn.com/w320/ye.png","svg":"https://flagcdn.com/ye.svg"}
  "Zambia": {"png":"https://flagcdn.com/w320/zm.png","svg":"https://flagcdn.com/zm.svg"}
  "Zimbabwe": {"png":"https://flagcdn.com/w320/zw.png","svg":"https://flagcdn.com/zw.svg"}
  "French Guiana": {"png":"https://flagcdn.com/w320/gf.png","svg":"https://flagcdn.com/gf.svg"}
  "Cook Islands" : {"png":"https://flagcdn.com/w320/ck.png","svg":"https://flagcdn.com/ck.svg"}
  "Western Sahara" : {"png":"https://flagcdn.com/w320/eh.png","svg":"https://flagcdn.com/eh.svg"}
  "Solomon Islands" : {"png":"https://flagcdn.com/w320/sb.png","svg":"https://flagcdn.com/sb.svg"}
  "Guernsey" : {"png":"https://flagcdn.com/w320/gg.png","svg":"https://flagcdn.com/gg.svg"}
  "British Virgin Islands" : {"png":"https://flagcdn.com/w320/vg.png","svg":"https://flagcdn.com/vg.svg"}
  "Guadeloupe" : {"png":"https://flagcdn.com/w320/gp.png","svg":"https://flagcdn.com/gp.svg"}
  "Cocos (Keeling) Islands" : {"png":"https://flagcdn.com/w320/cc.png","svg":"https://flagcdn.com/cc.svg"}
  "Palestine" : {"png":"https://flagcdn.com/w320/ps.png","svg":"https://flagcdn.com/ps.svg"}
  "Pitcairn Islands" : {"png":"https://flagcdn.com/w320/pn.png","svg":"https://flagcdn.com/pn.svg"}
  "Antigua and Barbuda" : {"png":"https://flagcdn.com/w320/ag.png","svg":"https://flagcdn.com/ag.svg"}
  "Saint Martin" : {"png":"https://flagcdn.com/w320/mf.png","svg":"https://flagcdn.com/mf.svg"}
  "Réunion" : {"png":"https://flagcdn.com/w320/re.png","svg":"https://flagcdn.com/re.svg"}
  "Bermuda" : {"png":"https://flagcdn.com/w320/bm.png","svg":"https://flagcdn.com/bm.svg"}
  "Curaçao" : {"png":"https://flagcdn.com/w320/cw.png","svg":"https://flagcdn.com/cw.svg"}
  "Jersey" : {"png":"https://flagcdn.com/w320/je.png","svg":"https://flagcdn.com/je.svg"
  "Turks and Caicos Islands" : {"png":"https://flagcdn.com/w320/tc.png","svg":"https://flagcdn.com/tc.svg"}
  "Martinique" : {"png":"https://flagcdn.com/w320/mq.png","svg":"https://flagcdn.com/mq.svg"}
  "South Georgia" : {"png":"https://flagcdn.com/w320/gs.png","svg":"https://flagcdn.com/gs.svg"}
  "United States Virgin Islands" : {"png":"https://flagcdn.com/w320/vi.png","svg":"https://flagcdn.com/vi.svg"}
  "French Southern and Antarctic Lands" : {"png":"https://flagcdn.com/w320/tf.png","svg":"https://flagcdn.com/tf.svg"}
  "French Polynesia" : {"png":"https://flagcdn.com/w320/pf.png","svg":"https://flagcdn.com/pf.svg"}
  "Saint Lucia" : {"png":"https://flagcdn.com/w320/lc.png","svg":"https://flagcdn.com/lc.svg"}
  "Saint Barthélemy" : {"png":"https://flagcdn.com/w320/bl.png","svg":"https://flagcdn.com/bl.svg"}
  "Gibraltar" : {"png":"https://flagcdn.com/w320/gi.png","svg":"https://flagcdn.com/gi.svg"}
  "Heard Island and McDonald Islands" : {"png":"https://flagcdn.com/w320/hm.png","svg":"https://flagcdn.com/hm.svg"}
  "DR Congo" : {"png":"https://flagcdn.com/w320/cd.png","svg":"https://flagcdn.com/cd.svg"}
  "Guam" : {"png":"https://flagcdn.com/w320/gu.png","svg":"https://flagcdn.com/gu.svg"}
  "Åland Islands" : {"png":"https://flagcdn.com/w320/ax.png","svg":"https://flagcdn.com/ax.svg"}
  "Falkland Islands" : {"png":"https://flagcdn.com/w320/fk.png","svg":"https://flagcdn.com/fk.svg"}
  "Burkina Faso" : {"png":"https://flagcdn.com/w320/bf.png","svg":"https://flagcdn.com/bf.svg"}
  "Christmas Island" : {"png":"https://flagcdn.com/w320/cx.png","svg":"https://flagcdn.com/cx.svg"}
  "Caribbean Netherlands" : {"png":"https://flagcdn.com/w320/bq.png","svg":"https://flagcdn.com/bq.svg"}
  "Macau" : {"png":"https://flagcdn.com/w320/mo.png","svg":"https://flagcdn.com/mo.svg"}
  "Antarctica" : {"png":"https://flagcdn.com/w320/aq.png","svg":"https://flagcdn.com/aq.svg"}
  "El Salvador" : {"png":"https://flagcdn.com/w320/sv.png","svg":"https://flagcdn.com/sv.svg"}
  "Anguilla" : {"png":"https://flagcdn.com/w320/ai.png"can City,"svg":"https://flagcdn.com/ai.svg"}
  "Northern Mariana Islands" : {"png":"https://flagcdn.com/w320/mp.png","svg":"https://flagcdn.com/mp.svg"}
  "New Zealand" : {"png":"https://flagcdn.com/w320/nz.png","svg":"https://flagcdn.com/nz.svg"}
  "United States Minor Outlying Islands" : {"png":"https://flagcdn.com/w320/um.png","svg":"https://flagcdn.com/um.svg"}
  "Greenland" : {"png":"https://flagcdn.com/w320/gl.png","svg":"https://flagcdn.com/gl.svg"}
  "Bosnia and Herzegovina" : {"png":"https://flagcdn.com/w320/ba.png","svg":"https://flagcdn.com/ba.svg"}
  "Eswatini" : {"png":"https://flagcdn.com/w320/sz.png","svg":"https://flagcdn.com/sz.svg"}
  "Vatican City" : {"png":"https://flagcdn.com/w320/va.png","svg":"https://flagcdn.com/va.svg"}
  "Papua New Guinea" : {"png":"https://flagcdn.com/w320/pg.png","svg":"https://flagcdn.com/pg.svg"}
  "Guinea-Bissau" : {"png":"https://flagcdn.com/w320/gw.png","svg":"https://flagcdn.com/gw.svg"}
  "Saint Pierre and Miquelon" : {"png":"https://flagcdn.com/w320/pm.png","svg":"https://flagcdn.com/pm.svg"}
  "Saint Helena" : {"png":"https://flagcdn.com/w320/sh.png","svg":"https://flagcdn.com/sh.svg"}
  "New Caledonia" : {"png":"https://flagcdn.com/w320/nc.png","svg":"https://flagcdn.com/nc.svg"}
  "Ivory Coast" : {"png":"https://flagcdn.com/w320/ci.png","svg":"https://flagcdn.com/ci.svg"}
  "Cayman Islands" : {"png":"https://flagcdn.com/w320/ky.png","svg":"https://flagcdn.com/ky.svg"}
  "Puerto Rico" : {"png":"https://flagcdn.com/w320/pr.png","svg":"https://flagcdn.com/pr.svg"}
  "Sint Maarten" : {"png":"https://flagcdn.com/w320/ch.png","svg":"https://flagcdn.com/ch.svg"}
  "São Tomé and Príncipe" : {"png":"https://flagcdn.com/w320/st.png","svg":"https://flagcdn.com/st.svg"}
  "Norfolk Island" : {"png":"https://flagcdn.com/w320/nf.png","svg":"https://flagcdn.com/nf.svg"}
  "Hong Kong" : {"png":"https://flagcdn.com/w320/hk.png","svg":"https://flagcdn.com/hk.svg"}
  "Cape Verde" : {"png":"https://flagcdn.com/w320/cv.png","svg":"https://flagcdn.com/cv.svg"}
  "Svalbard and Jan Mayen" : {"png":"https://flagcdn.com/w320/sj.png","svg":"https://flagcdn.com/sj.svg"}
  "Tonga" : {"png":"https://flagcdn.com/w320/to.png","svg":"https://flagcdn.com/to.svg"}
  "Saint Vincent and the Grenadines" : {"png":"https://flagcdn.com/w320/sj.png","svg":"https://flagcdn.com/sj.svg"}
  "Czechia" : {"png":"https://flagcdn.com/w320/cz.png","svg":"https://flagcdn.com/cz.svg"}
  "Dominican Republic" : {"png":"https://flagcdn.com/w320/do.png","svg":"https://flagcdn.com/do.svg"}
  "Bouvet Island" : {"png":"https://flagcdn.com/w320/bv.png","svg":"https://flagcdn.com/bv.svg"}
  "Saudi Arabia" : {"png":"https://flagcdn.com/w320/sa.png","svg":"https://flagcdn.com/sa.svg"}
  "Isle of Man" : {"png":"https://flagcdn.com/w320/im.png","svg":"https://flagcdn.com/im.svg"}
  "Equatorial Guinea" :{"png":"https://flagcdn.com/w320/gq.png","svg":"https://flagcdn.com/gq.svg"} 
  "Costa Rica" : {"png":"https://flagcdn.com/w320/cr.png","svg":"https://flagcdn.com/cr.svg"}
  "Central African Republic" : {"png":"https://flagcdn.com/w320/cf.png","svg":"https://flagcdn.com/cf.svg"}
  "Tokelau" : {"png":"https://flagcdn.com/w320/tk.png","svg":"https://flagcdn.com/tk.svg"}
  "Montserrat" : {"png":"https://flagcdn.com/w320/ms.png","svg":"https://flagcdn.com/ms.svg"}
  "South Sudan" : {"png":"https://flagcdn.com/w320/ss.png","svg":"https://flagcdn.com/ss.svg"}
  "North Macedonia" :  {"png":"https://flagcdn.com/w320/mk.png","svg":"https://flagcdn.com/mk.svg"}
  "Mayotte" : {"png":"https://flagcdn.com/w320/yt.png","svg":"https://flagcdn.com/yt.svg"}
  "Wallis and Futuna" : {"png":"https://flagcdn.com/w320/wf.png","svg":"https://flagcdn.com/wf.svg"}
  "Timor-Leste" : {"png":"https://flagcdn.com/w320/tl.png","svg":"https://flagcdn.com/tl.svg"}
  "British Indian Ocean Territory" : {"png":"https://flagcdn.com/w320/io.png","svg":"https://flagcdn.com/io.svg"}
  "American Samoa" : {"png":"https://flagcdn.com/w320/as.png","svg":"https://flagcdn.com/as.svg"}
  "Faroe Islands" : {"png":"https://flagcdn.com/w320/fo.png","svg":"https://flagcdn.com/fo.svg"}
  "Aruba" : {"png":"https://flagcdn.com/w320/aw.png","svg":"https://flagcdn.com/aw.svg"}

}


3. Countries names, regions , sub-regions, populations

Countries names : Grenada
regions : Americas
sub-regions : Caribbean
populations : 112519

Countries names : Malaysia
regions : Asia
sub-regions : South-Eastern Asia
populations : 32365998

Countries names : French Guiana
regions : Americas
sub-regions :  South America
populations : 254541

Countries names : Spain
regions : Europe
sub-regions : Southern Europe
populations : 47351567

Countries names : Cook Islands
regions : Oceania
sub-regions : Polynesia
populations : 18100

Countries names : Mali
regions : Africa
sub-regions : Western Africa
populations : 20250834

Countries names : Libya
regions : Africa
sub-regions : Northern Africa
populations : 6871287

Countries names : Western Sahara
regions : Africa
sub-regions : Northern Africa
populations : 510713

Countries names : Solomon Islands
regions : Oceania
sub-regions : Melanesia
populations : 686878

Countries names : Tunisia
regions : Africa
sub-regions : Northern Africa
populations : 11818618

Countries names : Guernsey
regions : Europe
sub-regions : Northern Europe
populations : 62999

Countries names : Seychelles
regions : Africa
sub-regions : Eastern Africa
populations : 98462

Countries names : British Virgin Islands
regions : Americas
sub-regions : Caribbean
populations : 30237 
 
Countries names : Georgia
regions : Asia
sub-regions : Western Asia
populations : 3714000

Countries names : Guadeloupe
regions : Americas
sub-regions : Caribbean
populations : 400132

Countries names : Syria
regions : Asia
sub-regions : Western Asia
populations : 17500657

Countries names : Norway
regions : Europe
sub-regions : Northern Europe
populations : 5379475

Countries names : Philippines
regions : Asia
sub-regions : South-Eastern Asia
populations : 109581085

Countries names : Iceland
regions : Europe
sub-regions : Northern Europe
populations : 366425

Countries names : Mozambique
regions : Africa
sub-regions : Eastern Africa
populations : 31255435

Countries names : Palau
regions : Oceania
sub-regions : Micronesia
populations : 18092

Countries names : Afghanistan
regions : Asia
sub-regions : Southern Asia
populations : 40218234

Countries names : Djibouti
regions : Africa
sub-regions : Eastern Africa
populations : 988002

Countries names : Peru
regions : Americas
sub-regions : South America
populations :32971846

Countries names : Luxembourg
regions : Europe
sub-regions : Western Europe
populations : 632275

Countries names : Burundi
regions : Africa
sub-regions : Eastern Africa
populations : 11890781

Countries names : Guyana
regions : Americas
sub-regions : South America
populations : 786559

Countries names : United Kingdom
regions : Europe
sub-regions : Northern Europe
populations : 67215293

Countries names : Cocos (Keeling) Islands
regions : Oceania
sub-regions : Australia and New Zealand
populations : 544
 
Countries names : Palestine
regions : Asia
sub-regions : Western Asia
populations : 4803269

Countries names : Pitcairn Islands
regions : Oceania
sub-regions : Polynesia
populations : 56

Countries names : Barbados
regions : Americas
sub-regions : Caribbean
populations : 287371

Countries names : Kiribati
regions : Oceania
sub-regions : Micronesia
populations : 119446

Countries names : South Africa
regions : Africa
sub-regions : Southern Africa
populations : 59308690

Countries names : Mongolia
regions : Asia
sub-regions : Eastern Asia
populations : 3278292

Countries names : Cyprus
regions : Europe
sub-regions : Southern Europe
populations : 1207361
 
Countries names : Mauritius
regions : Africa
sub-regions : Eastern Africa
populations : 1265740

Countries names : Saint Martin
regions : Americas
sub-regions : Caribbean
populations : 38659

Countries names : Réunion
regions : Africa
sub-regions : Eastern Africa
populations : 840974

Countries names : Bermuda
regions : Americas
sub-regions : North America
populations : 63903

Countries names : Monaco
regions : Europe 
sub-regions : Western Europe
populations : 39244

Countries names : Curaçao
regions : Americas
sub-regions : Caribbean
populations : 155014

Countries names : Jersey
regions : Europe
sub-regions : Northern Europe
populations : 100800

Countries names : Cambodia
regions : Asia
sub-regions : South-Eastern Asia
populations : 16718971

Countries names : Sudan
regions : Africa
sub-regions : Northern Africa
populations : 43849269

Countries names : Guinea
regions : Africa
sub-regions : Western Africa
populations : 13132792

Countries names : Turks and Caicos Islands
regions : Americas
sub-regions : Caribbean
populations : 38718

Countries names : Martinique
regions : Americas
sub-regions : Caribbean
populations : 378243

Countries names : Slovenia
regions : Europe
sub-regions : Central Europe
populations : 2100126

Countries names : Iran
regions : Asia
sub-regions : Southern Asia
populations : 83992953

Countries names : Sweden
regions : Europe
sub-regions : Northern Europe
populations : 10353442

Countries names : Bangladesh
regions : Asia
sub-regions : Southern Asia
populations : 164689383

Countries names : South Georgia
regions : Antarctic
populations : 30

Countries names : United States Virgin Islands
regions : Americas
sub-regions : Caribbean
populations : 106290

Countries names : French Southern and Antarctic Lands
regions : Antarctic
populations : 400

Countries names : Maldives
regions : Asia
sub-regions : Southern Asia
populations : 540542

Countries names : Greece
regions : Europe
sub-regions : Southern Europe
populations : 10715549

Countries names : Estonia
regions : Europe
sub-regions : Northern Europe
populations : 1331057

Countries names : Malta
regions : Europe
sub-regions : Southern Europe
populations : 525285

Countries names : French Polynesia
regions : Oceania
sub-regions : Polynesia
populations : 280904

Countries names : Saint Lucia
regions : Americas
sub-regions : Caribbean
populations : 183629

Countries names : Rwanda
regions : Africa
sub-regions : Eastern Africa
populations : 12952209

Countries names : Russia
regions : Europe
sub-regions : Eastern Europe
populations : 144104080

Countries names : Belarus
regions : Europe
sub-regions : Eastern Europe
populations : 9398861

Countries names : Croatia
regions : Europe
sub-regions : Southeast Europe
populations : 4047200

Countries names : Saint Barthélemy
regions : Americas
sub-regions : Caribbean
populations : 4255

Countries names : Gibraltar
regions : Europe
sub-regions : Southern Europe
populations : 33691

Countries names : Heard Island and McDonald Islands
regions : Antarctic
populations : 0

Countries names : Chile
regions : Americas
sub-regions : South America
populations : 19116209

Countries names : Armenia
regions : Asia
sub-regions : Western Asia
populations : 2963234

Countries names : Haiti
regions : Americas
sub-regions : Caribbean
populations : 11402533

Countries names : DR Congo
regions : Africa
sub-regions : Middle Africa
populations : 108407721

Countries names : Guam
regions : Oceania
sub-regions : Micronesia
populations : 168783

Countries names : Åland Islands
regions : Europe
sub-regions : Northern Europe
populations : 29458

Countries names : Iraq
regions : Asia
sub-regions : Western Asia
populations : 40222503

Countries names : Denmark
regions : Europe
sub-regions : Northern Europe
populations : 5831404

Countries names : Nigeria
regions : Africa
sub-regions : Western Africa
populations : 206139587

Countries names : Malawi
regions : Africa
sub-regions : Eastern Africa
populations : 19129955

Countries names : Colombia
regions : Americas
sub-regions : South America
populations : 50882884

Countries names : Guatemala
regions : Americas
sub-regions : Central America
populations : 16858333

Countries names : alkland Islands
regions : Americas
sub-regions : South America
populations : 2563

Countries names : Trinidad and Tobago
regions : Americas
sub-regions : Caribbean
populations : 1399491

Countries names : North Korea
regions : Asia
sub-regions : Eastern Asia
populations : 25778815

Countries names : Tuvalu
regions : Oceania
sub-regions : Polynesia
populations : 11792

Countries names : Indonesia
regions : Asia
sub-regions : South-Eastern Asia
populations : 273523621

Countries names : Ethiopia
regions : Africa
sub-regions : Eastern Africa
populations : 114963583

Countries names : Bolivia
regions : Americas
sub-regions : South America
populations : 11673029

Countries names : Sierra Leone
regions : Africa
sub-regions : Western Africa
populations : 7976985

Countries names : Montenegro
regions : Europe
sub-regions : Southeast Europe
populations : 621718

Countries names : Australia
regions : Oceania
sub-regions : Australia and New Zealand
populations : 25687041

Countries names : Republic of the Congo
regions : Africa
sub-regions : Middle Africa
populations : 5657000

Countries names : Burkina Faso
regions : Africa
sub-regions : Western Africa
populations : 20903278

Countries names : Israel
regions : Asia
sub-regions : Western Asia
populations : 9216900

Countries names : Uruguay
regions : Americas
sub-regions : South America
populations : 3473727

Countries names : Ireland
regions : Europe
sub-regions : Northern Europe
populations : 4994724

Countries names : Christmas Island
regions : Oceania
sub-regions : Australia and New Zealand
populations : 2072

Countries names : Caribbean Netherlands
regions : Americas
sub-regions : Caribbean
populations : 25987

Countries names : Taiwan
regions : Asia
sub-regions : Eastern Asia
populations : 23503349

Countries names : Botswana
regions : Africa
sub-regions : Southern Africa
populations : 2351625

Countries names : Zambia
regions : Africa
sub-regions : Eastern Africa
populations : 18383956

Countries names : Gabon
regions : Africa
sub-regions : Middle Africa
populations : 2225728

Countries names : Finland
regions : Europe
sub-regions : Northern Europe
populations : 5530719

Countries names : Macau
regions : Asia
sub-regions : Eastern Asia
populations : 649342

Countries names : Antarctica
regions : Antarctic
populations : 1000

Countries names : El Salvador
regions : Americas
sub-regions : Central America
populations : 6486201

Countries names : United States
regions : Americas
sub-regions : North America
populations : 329484123

Countries names : Marshall Islands
regions : Oceania
sub-regions : Micronesia
populations : 896444

Countries names : Germany
regions : Europe
sub-regions : Western Europe
populations : 83240525

Countries names : Belize
regions : Americas
sub-regions : Central America
populations : 397621

Countries names : Zimbabwe
regions : Africa
sub-regions : Southern Africa
populations : 14862927

Countries names : Qatar
regions : Asia
sub-regions : Western Asia
populations : 2881060

Countries names : Anguilla
regions : Americas
sub-regions : Caribbean
populations : 13452

Countries names : Angola
regions : Africa
sub-regions : Middle Africa
populations : 32866268

Countries names : Italy
regions : Europe
sub-regions : Southern Europe
populations : 59554023

Countries names : Togo
regions : Africa
sub-regions : Western Africa
populations : 8278737

Countries names : Northern Mariana Islands
regions : Oceania
sub-regions : Micronesia
populations : 57557

Countries names : New Zealand
regions : Oceania
sub-regions : Australia and New Zealand
populations : 5084300

Countries names : Myanmar
regions : Asia
sub-regions : South-Eastern Asia
populations : 54409794

Countries names : Oman
regions : Asia
sub-regions : Western Asia
populations : 5106622

Countries names : Samoa
regions : Oceania
sub-regions : Polynesia
populations : 198410

Countries names : Benin
regions : Africa
sub-regions : Western Africa
populations : 12123198

Countries names : Saint Kitts and Nevis
regions : Americas
sub-regions : Caribbean
populations : 53192

Countries names : Mauritania
regions : Africa
sub-regions : Western Africa
populations : 4649660

Countries names : United States Minor Outlying Islands
regions : Americas
sub-regions : North America
populations : 300

Countries names : Greenland
regions : Americas
sub-regions : North America
populations : 56367

Countries names : Bosnia and Herzegovina
regions : Europe
sub-regions : Southeast Europe
populations : 3280815

Countries names : Eswatini
regions : Africa
sub-regions : Southern Africa
populations : 1160164

Countries names : Vatican City
regions : Europe
sub-regions : Southern Europe
populations : 451

Countries names : France
regions : Europe
sub-regions : Western Europe
populations : 67391582

Countries names : Poland
regions : Europe
sub-regions : Central Europe
populations : 37950802

Countries names : Comoros
regions : Africa
sub-regions : Eastern Africa
populations : 869595

Countries names : Papua New Guinea
regions : Oceania
sub-regions : Melanesia
populations : 8947027

Countries names : Kenya
regions : Africa
sub-regions : Eastern Africa
populations : 53771300

Countries names : Vietnam
regions : Asia
sub-regions : South-Eastern Asia
populations : 97338583

Countries names : Vanuatu
regions : Oceania
sub-regions : Melanesia
populations : 307150

Countries names : Guinea-Bissau
regions : Africa
sub-regions : Western Africa
populations : 1967998

Countries names : Saint Pierre and Miquelon
regions : Americas
sub-regions : North America
populations : 6069

Countries names : Saint Helena, Ascension and Tristan da Cunha
regions : Africa
sub-regions : Western Africa
populations : 53192

Countries names : Uganda
regions : Africa
sub-regions : Eastern Africa
populations : 45741000

Countries names : Uzbekistan
regions : Asia
sub-regions : Central Asia
populations : 34232050

Countries names : New Caledonia
regions : Oceania
sub-regions : Melanesia
populations : 271960

Countries names : Paraguay
regions : Americas
sub-regions : South America
populations : 7132530

Countries names : Canada
regions : Americas
sub-regions : North America
populations : 38005238

Countries names : Niue
regions : Oceania
sub-regions : Polynesia
populations : 1470

Countries names : Thailand 
regions : Asia
sub-regions : South-Eastern Asia
populations : 69799978

Countries names : Austria
regions : Europe
sub-regions : Central Europe
populations : 8917205

Countries names : Bahrain
regions : Asia
sub-regions : Western Asia
populations : 1701583

Countries names : Nepal
regions : Asia
sub-regions : Southern Asia
populations : 29136808

Countries names : Algeria
regions : Africa
sub-regions : Northern Africa
populations : 44700000

Countries names : Kazakhstan
regions : Asia
sub-regions : Central Asia
populations : 18754440

Countries names : Laos
regions : Asia
sub-regions : South-Eastern Asia
populations : 7275556

Countries names : Kosovo
regions : Europe
sub-regions : Southeast Europe
populations : 1775378

Countries names : Ivory Coast
regions : Africa
sub-regions : Western Africa
populations : 26378275

Countries names : Cayman Islands
regions : Americas
sub-regions : Caribbean
populations : 65720

Countries names : Chad
regions : Africa
sub-regions : Middle Africa
populations : 16425859

Countries names : Turkmenistan
regions : Asia
sub-regions : Central Asia
populations : 6031187

Countries names : Puerto Rico 
regions : Americas
sub-regions : Caribbean
populations : 3194034

Countries names : Brazil
regions : Americas
sub-regions : South America
populations : 212559409

Countries names : Romania
regions : Europe
sub-regions : Southeast Europe
populations : 19286123

Countries names : Sint Maarten
regions : Americas
sub-regions : Caribbean
populations : 40812

Countries names : Switzerland
regions : Europe
sub-regions : Western Europe
populations : 8654622

Countries names : São Tomé and Príncipe
regions : Africa
sub-regions : Middle Africa
populations : 219161

Countries names : Pakistan
regions : Asia
sub-regions : Southern Asia
populations : 220892331

Countries names : Turkey
regions : Asia
sub-regions : Western Asia
populations : 84339067

Countries names : Suriname
regions : Americas
sub-regions : South America
populations : 586634

Countries names : Norfolk Island
regions : Oceania
sub-regions : Australia and New Zealand
populations : 2302

Countries names : Singapore
regions : Asia
sub-regions : South-Eastern Asia
populations : 5685807

Countries names : Tanzania
regions : Africa
sub-regions : Eastern Africa
populations : 59734213

Countries names : Micronesia
regions : Oceania
sub-regions : Micronesia
populations : 115021

Countries names : Slovakia
regions : Europe
sub-regions : Central Europe
populations : 5458827

Countries names : Hong Kong
regions : Asia
sub-regions : Eastern Asia
populations : 7500700

Countries names : Albania
regions : Europe
sub-regions : Southeast Europe
populations : 2837743

Countries names : India
regions : Asia
sub-regions : outhern Asia
populations : 1380004385

Countries names : Nicaragua
regions : Americas
sub-regions : Central America
populations : 6624554

Countries names : Japan
regions : Asia
sub-regions : Eastern Asia
populations : 125836021

Countries names : Argentina
regions : Americas
sub-regions : South America
populations : 45376763

Countries names : Cape Verde
regions : Africa
sub-regions : Western Africa
populations : 555988

Countries names : Moldova
regions : Europe
sub-regions : Eastern Europe
populations : 2617820

Countries names : Panama
regions : Americas
sub-regions : Central America
populations : 4314768

Countries names : Svalbard and Jan Mayen
regions : Europe
sub-regions : Northern Europe
populations : 2562

Countries names : Tonga
regions : Oceania
sub-regions : Polynesia
populations : 105697

Countries names : Saint Vincent and the Grenadines
regions : Americas
sub-regions : Caribbean
populations : 110947

Countries names : Czechia
regions : Europe
sub-regions : Central Europe
populations : 10698896

Countries names : Madagascar
regions : Africa
sub-regions : Eastern Africa
populations : 27691019

Countries names : Belgium
regions : Europe
sub-regions : Western Europe
populations : 11555997

Countries names : Hungary
regions : Europe
sub-regions : Central Europe
populations : 9749763

Countries names : Dominican Republic
regions : Americas
sub-regions : Caribbean
populations : 10847904

Countries names : Egypt
regions : Asia
sub-regions : Western Asia
populations : 4803269

Countries names : Antigua and Barbuda
regions : Americas
sub-regions : Caribbean
populations : 97928

Countries names : Nauru
regions : Oceania
sub-regions : Micronesia
populations : 10834

Countries names : Cameroon 
regions : Africa
sub-regions : Middle Africa
populations : 26545864

Countries names : Jamaica
regions : Americas
sub-regions : Caribbean
populations : 2961161

Countries names : Bouvet Island
regions : Antarctic
populations : 0

Countries names : Saudi Arabia
regions : Asia
sub-regions : Western Asia
populations : 34813867

Countries names : Azerbaijan
regions : Asia
sub-regions : Western Asia
populations : 10110116

Countries names : Jordan
regions : Asia
sub-regions : Western Asia
populations : 10203140

Countries names : Lithuania
regions : Europe
sub-regions : Northern Europe
populations : 2794700

Countries names : Isle of Man
regions : Europe
sub-regions :Northern Europe 
populations : 85032

Countries names : Equatorial Guinea
regions : Africa
sub-regions : Middle Africa
populations : 1402985

Countries names : Costa Rica
regions : Americas
sub-regions : Central America
populations : 5094114

Countries names : Cuba
regions : Americas
sub-regions : Caribbean
populations : 11326616

Countries names : Dominica
regions : Americas
sub-regions : Caribbean
populations : 71991

Countries names : Central African Republic
regions : Africa
sub-regions : Middle Africa
populations : 4829764

Countries names : Namibia
regions : Africa
sub-regions : Southern Africa
populations : 2540916

Countries names : Tokelau
regions : Oceania
sub-regions : Polynesia
populations : 1411

Countries names : Montserrat
regions : Americas
sub-regions : Caribbean
populations : 4922

Countries names : Serbia
regions : Europe
sub-regions : Southeast Europe
populations : 6908224

Countries names : Kuwait
regions : Asia
sub-regions : Western Asia
populations : 4270563

Countries names : Niger
regions : Africa
sub-regions : Western Africa
populations : 24206636

Countries names : San Marino
regions : Europe
sub-regions : Southern Europe
populations : 33938

Countries names : Ukraine
regions : Europe
sub-regions : Eastern Europe
populations : 44134693

Countries names : Bhutan
regions : Asia
sub-regions : Southern Asia
populations : 771612

Countries names : Yemen
regions : Asia
sub-regions : Western Asia
populations : 29825968

Countries names : Venezuela
regions : Americas
sub-regions : South America
populations : 28435943

Countries names : Morocco
regions : Africa
sub-regions : Northern Africa
populations : 36910558

Countries names : Brunei
regions : Asia
sub-regions : South-Eastern Asia
populations : 437483

Countries names : Senegal
regions : Africa
sub-regions : Western Africa
populations : 16743930

Countries names : South Sudan
regions : Africa
sub-regions : Middle Africa
populations : 11193729 

Countries names : Netherlands
regions : Europe
sub-regions : Western Europe
populations : 16655799

Countries names : Liechtenstein
regions : Europe
sub-regions : Western Europe
populations : 38137

Countries names : Andorra
regions : Europe
sub-regions : Southern Europe
populations : 77265

Countries names : Lebanon
regions : Asia
sub-regions : Western Asia
populations : 6825442

Countries names : Latvia
regions : Europe
sub-regions : Northern Europe
populations : 1901548 

Countries names : North Macedonia
regions : Europe
sub-regions : Southeast Europe
populations : 2077132

Countries names : Portugal
regions : Europe
sub-regions : Southern Europe
populations : 10305564

Countries names : Mexico
regions : Americas
sub-regions : North America
populations : 128932753

Countries names : Bahamas
regions : Americas
sub-regions : Caribbean
populations : 393248

Countries names : Mayotte
regions : Africa
sub-regions : Eastern Africa
populations : 226915

Countries names : China
regions : Asia
sub-regions : Eastern Asia
populations : 1402112000

Countries names : Kyrgyzstan
regions : Asia
sub-regions : Central Asia
populations : 6591600

Countries names : Wallis and Futuna
regions : Oceania
sub-regions : Polynesia
populations : 11750

Countries names : Gambia
regions : Africa
sub-regions : Western Africa
populations : 2416664

Countries names : Timor-Leste
regions : Asia
sub-regions : South-Eastern Asia
populations : 1318442

Countries names : Eritrea
regions : Africa
sub-regions : Eastern Africa
populations : 5352000

Countries names : Tajikistan
regions : Asia
sub-regions : Central Asia
populations : 9537642

Countries names : Sri Lanka
regions : Asia
sub-regions : Southern Asia
populations : 21919000

Countries names : Bulgaria
regions : Europe
sub-regions : Southeast Europe
populations : 6927288

Countries names : Lesotho
regions : Africa
sub-regions : Southern Africa
populations : 2142252

Countries names : British Indian Ocean Territory
regions : Africa
sub-regions : Eastern Africa
populations : 3000

Countries names : South Korea
regions : Asia
sub-regions : Eastern Asia
populations : 51780579

Countries names : Somalia
regions : Africa
sub-regions : Eastern Africa
populations : 15893219

Countries names : Ghana
regions : Africa
sub-regions : Western Africa
populations : 31072945

Countries names : American Samoa
regions : Oceania
sub-regions : Polynesia
populations : 55197

Countries names : Liberia
regions : Africa
sub-regions : Western Africa
populations : 5057677

Countries names : Faroe Islands
regions : Europe
sub-regions : Northern Europe
populations : 48865

Countries names : United Arab Emirates
regions : Asia
sub-regions : Western Asia
populations : 9890400

Countries names : Honduras
regions : Americas
sub-regions : Central America
populations : 9904608

Countries names : Ecuador
regions : Americas
sub-regions : South America
populations : 17643060

Countries names : Aruba
regions : Americas
sub-regions : Caribbean
populations : 106766