import template from "./index.pug";
import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import Embed from "@editorjs/embed"
import { jsPDF } from "jspdf";

class SimpleImage {
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  constructor({data}){
    this.data = data;
  }

  render(){
    const wrapper = document.createElement('div');
    const input = document.createElement('input');

    wrapper.classList.add('simple-image');
    wrapper.appendChild(input);

    input.placeholder = 'Paste an image URL...';
    input.value = this.data && this.data.url ? this.data.url : '';

    return wrapper;
  }

  save(blockContent){
    const input = blockContent.querySelector('input');

    return {
      url: input.value
    }
  }
}

export default {
  template: template(),
  setup() {
    console.log('about')
  },
  mounted() {
    this.editor = new EditorJS({
      autofocus: true,
      holder : 'editorjs',
      tools: {
        header: {
          class: Header,
          inlineToolbar : true
        },
        embed: {
          class: Embed,
          inlineToolbar : true
        },
        image: SimpleImage
      },
      data: {
        time: 1552744582955,
        blocks: [
          {
            "id": "ECYNmWqF5x",
            "type": "image",
            "data": {
              "url": "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
            }
          },
          {
            "id": "9qCYZs_p_0",
            "type": "header",
            "data": {
              "text": "\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\"",
              "level": 4
            }
          },
          {
            "id": "DizZezQdeh",
            "type": "header",
            "data": {
              "text": "\"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\"",
              "level": 5
            }
          },
          {
            "id": "DHlfCT1cY7",
            "type": "paragraph",
            "data": {
              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in justo mollis, molestie risus non, rutrum sapien. Vestibulum venenatis enim mi, volutpat sodales mi accumsan vel. Ut ac augue lacinia, consequat felis ac, feugiat dui. Nullam ultricies erat eget ante ultricies, nec sodales tortor mattis. Vivamus in risus varius dui bibendum elementum eget quis turpis. Nam consequat leo turpis, sed tempus ligula blandit et. Cras in varius diam. Praesent scelerisque purus nec dictum commodo. Praesent id pulvinar purus. Vestibulum ante magna, luctus vel bibendum vitae, tincidunt et lorem. Fusce eget tincidunt est. Sed urna eros, scelerisque a venenatis eget, venenatis vitae ex. Suspendisse potenti. Ut ac justo semper, consectetur mauris non, lacinia nibh."
            }
          },
          {
            "id": "H2WcdLJQjY",
            "type": "paragraph",
            "data": {
              "text": "Morbi quis pretium nunc. In porttitor feugiat varius. Duis euismod odio ipsum, sed tristique purus ullamcorper vitae. Nunc elementum lorem ac mauris vulputate placerat. Pellentesque nec elit enim. Duis ac enim porttitor, maximus velit sit amet, pretium orci. Aliquam porttitor id leo sed ornare. Integer volutpat, nulla at gravida mattis, nulla ex cursus odio, ut pretium erat urna a tellus."
            }
          },
          {
            "id": "mbhoTEWlP1",
            "type": "paragraph",
            "data": {
              "text": "Pellentesque ipsum magna, elementum sodales efficitur nec, sollicitudin quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tempus diam elit, efficitur vehicula turpis euismod eget. Aliquam odio libero, accumsan sit amet iaculis sit amet, facilisis eu velit. Maecenas ut lacus faucibus, rutrum nulla at, malesuada urna. Suspendisse congue iaculis sem non cursus. Sed at nunc neque. Suspendisse vitae dolor nulla."
            }
          },
          {
            "id": "UsSVpbB3iF",
            "type": "paragraph",
            "data": {
              "text": "Sed ullamcorper maximus dolor id volutpat. Nam consequat blandit erat id laoreet. Pellentesque sollicitudin, velit nec interdum malesuada, lacus mauris cursus lacus, in eleifend nibh ligula sit amet nibh. Integer at mi gravida enim feugiat dapibus. Ut ornare posuere tortor, et porta nisl semper sit amet. Etiam finibus porta enim, quis molestie lorem porta nec. Sed ornare, sapien volutpat suscipit placerat, dolor arcu tempus risus, eget egestas metus dui vitae mi. Curabitur porttitor a lorem in commodo. Proin nec tortor nec tellus scelerisque venenatis nec id sapien. Etiam cursus orci in purus interdum, id eleifend ipsum hendrerit. Nunc mi nulla, gravida sit amet velit ac, eleifend ullamcorper dolor. Donec efficitur, lacus at ultricies tincidunt, sem nisl tempus dui, ac eleifend tortor eros vitae ligula."
            }
          },
          {
            "id": "emEiAunUzb",
            "type": "paragraph",
            "data": {
              "text": "Nam urna lorem, consectetur id orci a, fringilla ornare augue. Quisque sed nulla a ipsum facilisis viverra. Phasellus dictum augue vel diam vestibulum vehicula. Maecenas id neque in velit viverra convallis nec eu orci. Aliquam ac ultrices tortor. Aenean pharetra ex felis, ut porta arcu dignissim at. Cras pretium nulla sed nisi pulvinar cursus. Sed sit amet ultrices mi. Sed justo sapien, maximus quis quam ut, ultricies aliquet metus. Fusce in pulvinar eros, vulputate porta neque. Donec lacus enim, sollicitudin eu velit sed, lacinia placerat mi. Etiam sed placerat turpis, eget commodo odio. Proin sollicitudin lacus ligula, eget sagittis massa pharetra sed. Sed non placerat purus."
            }
          },
          {
            "id": "ba1_entRU8",
            "type": "paragraph",
            "data": {
              "text": "Donec sed lacus felis. Nam lacinia sapien elit, id aliquet odio facilisis sit amet. Fusce sapien urna, finibus et dui eget, convallis tempus ligula. In quis risus in lacus lobortis laoreet sit amet eget risus. Suspendisse scelerisque malesuada mi, id interdum massa malesuada dignissim. Nulla eu turpis sed diam finibus vulputate. Donec hendrerit rhoncus nibh id tempor. Duis scelerisque sagittis magna, eget iaculis nibh posuere non. Nulla justo odio, pharetra vel justo blandit, vestibulum vehicula risus. Nullam fermentum felis vitae mauris efficitur vehicula. Mauris id rhoncus ipsum, vel cursus tortor. Vestibulum posuere mollis est, quis maximus risus ultricies quis. Maecenas faucibus risus sed libero laoreet eleifend. Donec convallis leo a aliquam auctor. Praesent iaculis arcu ex, sed porta felis iaculis sit amet."
            }
          },
          {
            "id": "p4y_4eWu81",
            "type": "paragraph",
            "data": {
              "text": "Morbi ultrices iaculis ante, ac convallis mi mollis at. Donec vitae facilisis est. Proin non laoreet ex, sodales mollis orci. Aliquam nunc nisi, maximus sed velit et, viverra varius odio. Nullam nibh massa, maximus eu faucibus quis, vehicula eget ligula. Cras iaculis ex sit amet hendrerit elementum. Praesent commodo facilisis nunc. Curabitur efficitur ac neque aliquet condimentum. Nulla nunc augue, vulputate vel luctus ac, congue a orci. Nullam nec imperdiet leo. Vestibulum laoreet ex ac malesuada eleifend. Duis a ligula ultrices, finibus mi a, iaculis sapien."
            }
          },
          {
            "id": "-MBtPKMPTg",
            "type": "paragraph",
            "data": {
              "text": "Curabitur orci diam, feugiat ac diam vel, dignissim feugiat dolor. Vivamus id lacus id diam feugiat laoreet quis et metus. Sed ut nisl vitae elit consequat tempor. Cras vehicula purus dui, ut iaculis ipsum tristique in. In pretium nec massa quis luctus. Vivamus fringilla lectus nec enim euismod, vitae commodo risus molestie. Proin ullamcorper eu lorem eu tristique. Fusce cursus pretium odio sit amet dignissim. Phasellus ut congue quam. Nunc interdum, libero nec egestas porttitor, massa tellus tincidunt leo, non placerat orci ligula at libero. Morbi elementum dui sit amet nisi sagittis dictum. Fusce ligula nisl, cursus non ultricies molestie, lobortis non turpis. Aenean vitae pulvinar dui. In sed purus nec odio interdum consectetur."
            }
          },
          {
            "id": "GlK1HwDo5i",
            "type": "paragraph",
            "data": {
              "text": "Morbi hendrerit est id dictum hendrerit. Quisque sit amet sapien euismod, consectetur lorem a, iaculis libero. Nullam vel nibh a tellus pulvinar tristique. Sed viverra ultricies libero, tempor congue nulla accumsan nec. Nam a sapien sit amet quam vestibulum tempus sit amet sed erat. Nullam ac pulvinar nisi. Duis in neque ac dolor finibus congue et non enim. Etiam luctus diam porta, dictum velit eu, porta metus. Mauris a suscipit leo, vel dignissim libero."
            }
          },
          {
            "id": "BnJ5PO4PoR",
            "type": "paragraph",
            "data": {
              "text": "Duis tempus pretium tortor, a egestas sapien tempus sed. Etiam efficitur sapien lacus, a feugiat nisl tincidunt at. Fusce sed quam quis tellus hendrerit porta sit amet eu nunc. Sed ultricies nisl hendrerit, commodo risus eget, tempor arcu. Sed ullamcorper, dui eget dignissim viverra, nisi nulla sagittis lorem, at lacinia enim sem a felis. Mauris sodales placerat pretium. Vivamus efficitur semper lacus, eget sollicitudin dui venenatis eu."
            }
          },
          {
            "id": "W3usculYRa",
            "type": "paragraph",
            "data": {
              "text": "Mauris congue ullamcorper blandit. Vivamus ac sem volutpat, vehicula risus sit amet, porta turpis. Phasellus varius, elit a sagittis finibus, felis velit vehicula nunc, in vestibulum ipsum augue lobortis nulla. Donec auctor ante non quam aliquet, nec euismod leo porta. Proin aliquet sagittis hendrerit. Quisque venenatis erat sed diam hendrerit, sed ornare augue feugiat. Suspendisse potenti. Nunc varius viverra tempor. Nam cursus accumsan quam et pellentesque. Integer tempus dui non sapien cursus laoreet vel eu augue. Nam gravida egestas lectus. Donec vitae leo sed nisl pharetra elementum quis at mi. Aliquam sed justo et mauris imperdiet sollicitudin a a risus."
            }
          },
          {
            "id": "4IUml32sWN",
            "type": "paragraph",
            "data": {
              "text": "Mauris vulputate ullamcorper dapibus. Aenean lacus leo, venenatis at mattis quis, dapibus eget turpis. Aenean commodo sodales dapibus. Vivamus porta, tellus et suscipit bibendum, erat mi varius neque, eu eleifend ipsum enim sed neque. Proin condimentum nunc at ipsum lobortis pharetra. Aliquam sit amet suscipit lacus, sit amet aliquam nisl. Sed gravida felis porta metus sagittis, eget sodales dui tincidunt. Cras convallis nibh id imperdiet aliquet. Suspendisse consectetur in dolor et consequat. Nulla facilisi. Nulla faucibus eu sapien quis ornare. Sed elementum, arcu non maximus euismod, augue nisl aliquam neque, quis iaculis enim odio id ante. Vestibulum lorem ex, vehicula a luctus in, venenatis mollis nunc."
            }
          },
          {
            "id": "EJrd7EJlyq",
            "type": "paragraph",
            "data": {
              "text": "Fusce auctor massa non augue porttitor viverra. Suspendisse sed neque in nulla ultricies consequat. Curabitur semper pulvinar augue, in gravida est fermentum eu. Duis vitae massa volutpat, rhoncus urna sit amet, ullamcorper diam. Maecenas quam libero, rhoncus non urna eu, varius gravida dolor. Curabitur cursus condimentum massa et ullamcorper. Nullam pharetra sem et dolor iaculis, eu mollis neque sodales. Maecenas viverra iaculis nibh eu eleifend. Proin sed laoreet eros."
            }
          },
          {
            "id": "EGdbJW9bOJ",
            "type": "paragraph",
            "data": {
              "text": "Praesent accumsan sed leo sed blandit. Donec in nunc eu lectus accumsan commodo eu eu mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lobortis metus at odio malesuada, ut ultricies est suscipit. Morbi tincidunt sapien eget nibh fermentum facilisis. Cras dignissim ut ex a tempor. Duis placerat odio nec feugiat cursus. Ut lacinia ipsum a tempus feugiat."
            }
          },
          {
            "id": "rhvna_rRDS",
            "type": "paragraph",
            "data": {
              "text": "Aliquam consectetur feugiat metus, in fermentum quam aliquet nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eu pharetra elit. Vivamus pellentesque efficitur congue. Quisque tincidunt at dolor ut egestas. Aliquam vel tristique neque. Duis dignissim ullamcorper nisi a aliquam. Morbi venenatis vitae erat lacinia cursus. Ut sollicitudin ante vitae sapien lobortis, nec ornare magna tempor. Suspendisse malesuada viverra fringilla. Fusce ut sapien eu tellus condimentum pharetra. Vivamus placerat nec mauris cursus dignissim. Aenean metus massa, auctor eu diam sit amet, accumsan sodales enim. In ut faucibus lacus, vel sollicitudin eros. Fusce mattis sed nibh sed dictum. Sed quis ornare nibh."
            }
          },
          {
            "id": "lN4TmuvBZE",
            "type": "paragraph",
            "data": {
              "text": "Quisque consectetur quam massa, id dignissim diam vulputate sit amet. Cras placerat convallis augue a semper. Fusce semper ipsum commodo, rhoncus lorem ut, ullamcorper orci. Vivamus eu justo libero. Duis id justo eu orci luctus mollis. Sed non eros vitae nulla molestie aliquet. Sed hendrerit neque eu lacus pharetra, ac efficitur velit sollicitudin. Donec pretium, lacus nec molestie blandit, augue justo semper risus, semper tincidunt lectus metus et ex. Vivamus ac eleifend urna."
            }
          },
          {
            "id": "oaLMUyNbNd",
            "type": "paragraph",
            "data": {
              "text": "Pellentesque vehicula finibus ex, ut suscipit mauris sagittis ut. Pellentesque ac erat scelerisque, rutrum sapien at, fermentum enim. Donec pulvinar elementum mauris sed ornare. In ut dolor nec purus ornare iaculis at sed purus. Nam leo dolor, iaculis sit amet nulla vel, tempus aliquet leo. Aliquam viverra placerat risus, sed accumsan eros gravida a. Duis venenatis, quam in egestas feugiat, lorem massa facilisis leo, eget pellentesque enim lectus a libero. Nunc cursus libero in orci efficitur, eu ultrices nisl tincidunt. Sed eu magna eu metus fermentum interdum eleifend sit amet libero. Proin fringilla faucibus interdum."
            }
          },
          {
            "id": "lHFzLAY-OG",
            "type": "paragraph",
            "data": {
              "text": "Donec facilisis laoreet convallis. Donec pulvinar feugiat ex, ac convallis diam ullamcorper et. Sed blandit sapien vehicula erat volutpat pellentesque. Etiam sed dolor vestibulum, egestas eros at, accumsan dui. Ut sodales feugiat risus in scelerisque. Quisque commodo ligula eget massa consectetur placerat. Aenean faucibus, nulla vel interdum mollis, dui libero porta leo, lobortis tempus purus arcu nec ipsum. Duis vel libero mattis, cursus quam id, finibus augue. Donec nisi dui, semper ac dui sed, pretium fringilla massa. Maecenas sit amet risus porttitor, ornare nisl non, ultrices felis. Maecenas sit amet tortor vulputate, semper ligula nec, consectetur felis. Etiam viverra vel diam gravida egestas. Nullam fringilla id quam vel sollicitudin. Curabitur sed lacus libero. Donec ac eros lorem."
            }
          },
          {
            "id": "6KQUOhT1k9",
            "type": "paragraph",
            "data": {
              "text": "Duis feugiat mauris ac turpis consectetur, sit amet rhoncus justo vulputate. Duis ut nibh consequat ex sodales scelerisque non vel leo. Praesent lacinia, justo quis molestie tempus, lectus turpis maximus purus, ac condimentum nibh velit vitae orci. Pellentesque eros mi, mattis eu orci sit amet, ultrices rutrum nibh. Vivamus finibus dapibus convallis. Etiam vitae velit sed mi aliquam dapibus et vitae nisl. Nunc mattis convallis mi eu mollis. Sed sit amet nisi gravida, fermentum lectus ac, vehicula massa. Nulla pulvinar ultricies tempus. Nulla sollicitudin convallis leo et vulputate. Cras consectetur neque quam, quis placerat nunc viverra quis. Ut luctus, nulla ut egestas aliquam, tellus massa ullamcorper ipsum, eget laoreet enim urna vitae nulla. Pellentesque eu nunc vitae nunc lacinia fringilla ut ac ligula. Quisque quis efficitur urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In a efficitur odio."
            }
          },
          {
            "id": "vn2bufBQzB",
            "type": "paragraph",
            "data": {
              "text": "Aenean et malesuada sapien. Sed sed nisi orci. Suspendisse et consectetur mauris. Aenean interdum tortor augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac commodo sem, in lacinia purus. Aliquam dolor tortor, iaculis ac lorem ut, maximus tempus tellus. Aenean placerat diam vel orci mattis, sollicitudin pharetra ex sagittis. In condimentum nisl sed tortor facilisis viverra."
            }
          },
          {
            "id": "QPFFCm6VXy",
            "type": "paragraph",
            "data": {
              "text": "Nunc semper mauris neque, id faucibus est sagittis a. Etiam vestibulum cursus magna, pretium rhoncus ligula. Mauris sem diam, aliquam eu dictum et, fermentum porta purus. Sed auctor, est sit amet venenatis ornare, nulla massa scelerisque ante, pulvinar hendrerit orci orci in orci. Mauris elementum dolor a consequat consectetur. Nullam luctus quam malesuada ligula faucibus, et eleifend nisl gravida. Nam a egestas mi. Duis et augue ultrices, sodales orci non, semper diam. Sed id tellus sem. Cras a molestie velit. In egestas consectetur ipsum non fermentum. Morbi convallis sit amet odio ut tempor."
            }
          },
          {
            "id": "1AqioTTMtb",
            "type": "paragraph",
            "data": {
              "text": "Aenean sollicitudin quis velit ac placerat. Pellentesque lectus nunc, mollis in eros sed, convallis rhoncus ligula. Aliquam semper velit nec eros ultrices, scelerisque molestie nulla gravida. Sed nec elit molestie, varius quam non, interdum lorem. Donec quis bibendum sapien. Fusce sed arcu blandit, vulputate nibh eu, luctus nibh. Phasellus commodo, justo nec scelerisque consectetur, dui eros pulvinar odio, eget aliquam tortor nisl vitae turpis. Etiam vulputate luctus convallis. Duis dignissim risus elit, in consequat leo imperdiet sed. Etiam nec dui id purus viverra rhoncus quis quis nulla. Etiam odio orci, tincidunt eu nunc eu, rutrum ultricies metus. Donec velit diam, volutpat at tempor quis, sodales quis urna. Phasellus porttitor, tortor vitae dignissim hendrerit, tortor libero ornare orci, vitae semper odio lectus ac nunc. Sed nisl nulla, efficitur vel urna pellentesque, dictum rhoncus odio. Donec ut fringilla lectus."
            }
          },
          {
            "id": "BBd4Xt-Vt3",
            "type": "paragraph",
            "data": {
              "text": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque fringilla varius quam, ut tincidunt velit cursus et. Maecenas pretium massa iaculis tincidunt scelerisque. Mauris et leo vitae leo volutpat molestie a vel magna. Mauris dui sem, porttitor eget scelerisque placerat, porttitor vel leo. Nam ornare, urna vitae varius consequat, quam eros ultricies tellus, et tristique ex velit ut magna. Nullam scelerisque diam ac cursus lacinia. In porta, nisl ut aliquam bibendum, ante libero gravida nibh, sed molestie eros massa vulputate lectus."
            }
          },
          {
            "id": "dwRkeE7o7O",
            "type": "paragraph",
            "data": {
              "text": "Aliquam vel tellus et leo blandit elementum in ut nisl. Vestibulum eu interdum mauris. Etiam in tempor erat, ac maximus purus. Nunc sit amet nisi ut mauris aliquet semper. Aliquam dapibus lorem metus, nec bibendum magna blandit vel. Phasellus ac tellus lacus. Donec pretium ipsum nibh, ac convallis erat hendrerit non. Cras mollis congue lorem, eu facilisis risus lobortis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aliquam placerat id ante et lacinia. Praesent quam tellus, aliquam non metus et, ultricies mollis lorem. Sed dignissim vel augue et vehicula. Donec sem purus, maximus id volutpat non, feugiat nec nisi."
            }
          },
          {
            "id": "QAttRZXA7_",
            "type": "paragraph",
            "data": {
              "text": "In hac habitasse platea dictumst. Quisque sollicitudin mattis sapien. Morbi eget molestie urna, quis posuere nulla. Morbi vitae nibh accumsan, consequat erat ac, consectetur dui. Fusce ut nibh est. Nulla congue sem eu eros iaculis, vitae lobortis nunc bibendum. Donec id metus vel leo porttitor consequat eu vitae risus."
            }
          },
          {
            "id": "P2q7Bcteul",
            "type": "paragraph",
            "data": {
              "text": "Generated 25 paragraphs, 2341 words, 15579 bytes of<a href=\"https://www.lipsum.com/\">Lorem Ipsum</a>"
            }
          }
        ],
        version: "2.11.10"
      }
    })
  },
  methods: {
    save() {
      this.editor.save().then(savedData => {
        console.log(savedData);
      })
    },

    pdf() {
      const doc = new jsPDF('p', 'pt', 'a4')

      doc.html(document.body, {
        callback: function (doc) {
          doc.save()
        },
        margin: 30,
        autoPaging: 'text',
        html2canvas: { scale: 0.65 }
      })
    },

    print() {
      window.print()
    }
  }
}
