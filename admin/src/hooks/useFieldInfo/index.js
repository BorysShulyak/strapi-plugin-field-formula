import get from 'lodash/get';

// Examples of possible logs from MediaLibraryInputWrapper:
//  - props.name=muiStartIcon, fieldNamespaceData=, fieldName=muiStartIcon, isMuiIconButton=true
//  - props.name=anotherMedia, fieldNamespaceData=, fieldName=anotherMedia, isMuiIconButton=false
//  - props.name=callToHell.muiEndIcon, fieldNamespaceData=callToHell, fieldName=muiEndIcon, isMuiIconButton=true
//  - props.name=callToValhalla.1.muiIcon, fieldNamespaceData=callToValhalla.1, fieldName=muiIcon, isMuiIconButton=true
//  - props.name=someComp.0.btns.2.muiEndIcon, fieldNamespaceData=someComp.0.btns.2, fieldName=muiEndIcon, isMuiIconButton=true
const useFieldInfo = (name, editViewData) => {
  const fieldNamespace = name.includes('.') ? name.slice(0, name.lastIndexOf('.')) : '';
  const fieldName = name.split('.').at(-1);
  const { modifiedData } = editViewData;
  const fieldNamespaceData = get(modifiedData, fieldNamespace, modifiedData);
  return [fieldName, fieldNamespaceData, fieldNamespace];
};

export default useFieldInfo;
