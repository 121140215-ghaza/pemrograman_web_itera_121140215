// Impor dari modul lain
import { formatDate, capitalizeString } from './modules/utils.js';
import { sampleData } from './modules/data.js';
import { 
    demoVariables, 
    demoArrowFunctions, 
    demoTemplateLiterals, 
    demoDestructuring, 
    demoSpreadRest,
    demoDefaultParams,
    demoClasses,
    demoObjectLiterals,
    demoArrayMethods,
    demoAdvancedArrays,
    demoPromises,
    demoAsyncAwait
} from './app.js';

// Elemen DOM
const elemenOutput = document.getElementById('output');
const tombolJalankan = document.getElementById('runBtn');
const tombolBersihkan = document.getElementById('clearBtn');

// Fungsi untuk menambahkan output ke DOM
function tambahOutput(judul, kode, hasil) {
    const itemOutput = document.createElement('div');
    itemOutput.className = 'output-item';

    const judulEl = document.createElement('div');
    judulEl.className = 'output-title';
    judulEl.textContent = judul;

    const kodeEl = document.createElement('div');
    kodeEl.className = 'code';
    kodeEl.textContent = kode;

    const hasilEl = document.createElement('div');
    hasilEl.className = 'result';

    if (typeof hasil === 'object') {
        hasilEl.textContent = JSON.stringify(hasil, null, 2);
    } else {
        hasilEl.textContent = hasil;
    }

    itemOutput.appendChild(judulEl);
    itemOutput.appendChild(kodeEl);
    itemOutput.appendChild(hasilEl);

    elemenOutput.appendChild(itemOutput);
}

// Event listener untuk tombol Jalankan
tombolJalankan.addEventListener('click', () => {
    bersihkanOutput();
    jalankanSemuaDemo();
});

// Event listener untuk tombol Bersihkan
tombolBersihkan.addEventListener('click', bersihkanOutput);

function bersihkanOutput() {
    elemenOutput.innerHTML = '';
}

// Fungsi utama untuk menjalankan semua demo
function jalankanSemuaDemo() {
    // Demo Let dan Const
    const hasilVar = demoVariables();
    tambahOutput(
        "1. Let dan Const",
        "var vs let/const dan block scope",
        `var (function scope): ${hasilVar.oldVar}
        let (block scope): ${hasilVar.newLet}
        const (immutable): ${hasilVar.PI}
        const object (mutable content): ${JSON.stringify(hasilVar.user)}`
    );

    // Demo Arrow Functions
    const hasilArrow = demoArrowFunctions();
    tambahOutput(
        "2. Arrow Functions",
        "Perbandingan fungsi reguler dan arrow functions",
        `Regular function: ${hasilArrow.regularSum}
        Arrow function: ${hasilArrow.arrowSum}
        Short arrow: ${hasilArrow.shortArrowSum}
        No params: ${hasilArrow.sayHello}
        Single param: ${hasilArrow.square}`
    );

    // Demo Template Literals
    const hasilTemplate = demoTemplateLiterals();
    tambahOutput(
        "3. Template Literals",
        "Penggabungan string vs template literals",
        `Old way: ${hasilTemplate.oldWay}
        New way: ${hasilTemplate.newWay}
        With expression: ${hasilTemplate.expression}
        Multi-line: ${hasilTemplate.multiLine}`
    );

    // Demo Destructuring
    const hasilDestructuring = demoDestructuring();
    tambahOutput(
        "4. Destructuring",
        "Ekstraksi nilai dari objek dan array",
        `Object basic: ${JSON.stringify(hasilDestructuring.objectBasic)}
        Object renamed: ${JSON.stringify(hasilDestructuring.objectRenamed)}
        Object default: ${hasilDestructuring.objectDefault}
        Object nested: ${JSON.stringify(hasilDestructuring.objectNested)}
        Array basic: ${JSON.stringify(hasilDestructuring.arrayBasic)}
        Array skipped: ${hasilDestructuring.arraySkipped}
        Array with rest: ${JSON.stringify(hasilDestructuring.arrayRest)}
        Swapped variables: ${JSON.stringify(hasilDestructuring.swapped)}`
    );

    // Demo Spread dan Rest Operators
    const hasilSpreadRest = demoSpreadRest();
    tambahOutput(
        "5. Spread dan Rest Operators",
        "Penggunaan ... untuk array dan objek",
        `Spread in array: ${JSON.stringify(hasilSpreadRest.spreadArray)}
        Copy array: ${JSON.stringify(hasilSpreadRest.copyArray)}
        Merged arrays: ${JSON.stringify(hasilSpreadRest.mergedArrays)}
        Spread in object: ${JSON.stringify(hasilSpreadRest.spreadObject)}
        Rest in function (sum): ${hasilSpreadRest.restSum}
        Rest with regular params: ${JSON.stringify(hasilSpreadRest.restProcess)}`
    );

    // Demo Default Parameters
    const hasilDefaultParams = demoDefaultParams();
    tambahOutput(
        "6. Default Parameters",
        "Nilai default untuk parameter fungsi",
        `Old way: ${hasilDefaultParams.oldWay}
        Old way with params: ${hasilDefaultParams.oldWayParams}
        New way: ${hasilDefaultParams.newWay}
        New way with params: ${hasilDefaultParams.newWayParams}
        With expression: ${JSON.stringify(hasilDefaultParams.withExpression)}
        Using previous params: ${JSON.stringify(hasilDefaultParams.usingPrevious)}`
    );

    // Demo Classes
    const hasilClasses = demoClasses();
    tambahOutput(
        "7. Classes",
        "Penggunaan class dan inheritance",
        `User: ${hasilClasses.user.info}
        User created: ${hasilClasses.user.createdDate}
        Admin: ${hasilClasses.admin.info}
        Admin created: ${hasilClasses.admin.createdDate}
        Admin has access: ${hasilClasses.admin.hasAccess}
        user instanceof User: ${hasilClasses.isUserInstance}
        admin instanceof User: ${hasilClasses.isAdminInstance}`
    );

    // Demo Enhanced Object Literals
    const hasilObjectLiterals = demoObjectLiterals();
    tambahOutput(
        "8. Enhanced Object Literals",
        "Penulisan objek yang lebih ringkas",
        `Property shorthand: ${JSON.stringify(hasilObjectLiterals.newWay)}
        Method shorthand: ${hasilObjectLiterals.methods.new}
        Computed properties: ${JSON.stringify(hasilObjectLiterals.computedProps)}
        Dynamic properties: ${JSON.stringify(hasilObjectLiterals.dynamicProps)}`
    );

    // Demo Array Methods
    const hasilArrayMethods = demoArrayMethods();
    tambahOutput(
        "9. Modern Array Methods",
        "Higher-Order Functions pada array",
        `map: ${JSON.stringify(hasilArrayMethods.map)}
        filter (evenNumbers): ${JSON.stringify(hasilArrayMethods.filter.evenNumbers)}
        filter (activeUsers): ${hasilArrayMethods.filter.activeUsers}
        find: ${JSON.stringify(hasilArrayMethods.find)}
        some (hasAdult): ${hasilArrayMethods.some}
        every (allAdults): ${hasilArrayMethods.every}
        reduce (sum): ${hasilArrayMethods.reduce.sum}
        reduce (oldest): ${hasilArrayMethods.reduce.oldest}
        chaining (activeUsersNames): ${JSON.stringify(hasilArrayMethods.chaining.activeUsersNames)}
        chaining (totalActiveAge): ${hasilArrayMethods.chaining.totalActiveAge}`
    );

    // Demo Advanced Arrays
    const hasilAdvArrays = demoAdvancedArrays();
    tambahOutput(
        "10. Advanced Arrays",
        "Fitur array lanjutan",
        `Clone: ${JSON.stringify(hasilAdvArrays.clone)}
        Concat: ${JSON.stringify(hasilAdvArrays.concat.combinedArrays)}
        Array.from: ${JSON.stringify(hasilAdvArrays.arrayFrom.withMapFn)}
        Array.of: ${JSON.stringify(hasilAdvArrays.arrayOf)}
        flat: ${JSON.stringify(hasilAdvArrays.flatAndFlatMap.flattened)}
        deepFlat: ${JSON.stringify(hasilAdvArrays.flatAndFlatMap.deepFlattened)}
        flatMap: ${JSON.stringify(hasilAdvArrays.flatAndFlatMap.flatMapped)}
        includes: ${hasilAdvArrays.includes}`
    );

    // Demo Promises
    tambahOutput(
        "11. Promises",
        "Penanganan operasi asinkron dengan Promise",
        ""
    );
    const outputPromise = demoPromises();
    document.querySelector('.output-item:last-child .result').appendChild(outputPromise);

    // Demo Async/Await
    tambahOutput(
        "12. Async/Await",
        "Penanganan operasi asinkron dengan sintaks yang lebih bersih",
        ""
    );
    const outputAsync = demoAsyncAwait();
    document.querySelector('.output-item:last-child .result').appendChild(outputAsync);
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    console.log('Demo JavaScript Generasi Berikutnya Siap!');
});
