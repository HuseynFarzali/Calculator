function sortInnerHTML(collection) {
    for (let i = 0; i < collection.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < collection.length; j++) {
            if (parseInt(collection[j].innerHTML) < parseInt(collection[min].innerHTML)) {
                min = j;
            }
        }

        let temp = collection[min];
        collection[min] = collection[i];
        collection[i] = temp;
    }

    return collection;
}

function sortButtons(dataCollection) {
    let buttonsArr = []
    let dotButtonIndex;
    for (let i = 0; i < dataCollection.length; i++) {
        if (dataCollection[i].innerHTML !== '.') {
            buttonsArr.push(dataCollection[i]);
        } else {
            dotButtonIndex = i;
        }
    }
    buttonsArr = sortInnerHTML(buttonsArr);
    buttonsArr.push(dataCollection[dotButtonIndex]);

    return buttonsArr;
}

function handleDBClick(element, displayField) {
    if (displayField.innerHTML === '0' || nonShownOperations.includes(activeOperation)) {
        displayField.innerHTML = element.innerHTML;

        activeOperation = null;
    } else if (!displayField.innerHTML.includes('.')) {
        displayField.innerHTML = 
        displayField.innerHTML.concat(element.innerHTML);
    } else {
        if (element.innerHTML !== '.') {
            displayField.innerHTML = 
            displayField.innerHTML.concat(element.innerHTML);
        }
    }

    currentValue = parseFloat(displayField.innerHTML);
    console.log(previousValue, currentValue, typeof previousValue, typeof currentValue);
}

function addEventListenerToAll(dataCollection, displayField) {
    for (let i = 0; i < dataCollection.length; i++) {
        dataCollection[i].addEventListener('click', () => {
            handleDBClick(dataCollection[i], displayField)
        });
    }
}