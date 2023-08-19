//Triangle Area

function calculateTriangleArea(){

    const BaseFiled = document.getElementById('triangle-base');
    const baseString = BaseFiled.value;
    const base =parseFloat(baseString);
    BaseFiled.value = '';

    const heightField = document.getElementById('triangle-height');
    const heightString = heightField.value;
    const height = parseFloat(heightString );
    heightField.value = '';
   
    const area = 0.5 * base * height;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

//Rectangle Area

function calculateRectangleArea(){

    const widthFiled = document.getElementById('rectangle-width');
    const widthString = widthFiled.value;
    const width =parseFloat(widthString);
    widthFiled.value = '';

    const lengthField = document.getElementById('rectangle-length');
    const lengthString = lengthField.value;
    const length = parseFloat(lengthString );
    lengthField.value = '';
   
    const area =  width * length;

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = area; 
}

// Parallelogram  Area

function calculateParallelogramleArea(){

    const ParallelogramBaseField = document.getElementById('Parallelogram-base');
    const ParallelogramBaseString = ParallelogramBaseField.value;
    const B = parseFloat(ParallelogramBaseString );
    ParallelogramBaseField.value = '';
    console.log(B);

    const ParallelogramHeightField = document.getElementById('Parallelogram-height');
    const ParallelogramHeightString = ParallelogramHeightField.value;
    const H = parseFloat(ParallelogramHeightString);
    ParallelogramHeightField.value = '';
    console.log(H);

    const area = B * H;

    const ParallelogramSpan = document.getElementById('Parallelogram-area');
    ParallelogramSpan .innerText =  area;

}