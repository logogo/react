/**
 * @file 文件操作
 */

/**
 * 保存blob数据为文件
 * @param blob
 * @param [name]
 */
export const saveBlobAsFile = (blob, name) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

/**
 * 下载网络链接指向的文件
 * @param url 普通文件链接
 * @param [name] 保存时的文件名
 */
export const saveLinkAsFile = (url, name) => {
    return fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const fileName = name || '下载';
            saveBlobAsFile(blob, fileName);
            return blob;
        });
};