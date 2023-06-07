function solution(new_id) {
  new_id = new_id
      .toLowerCase()
      .replace(/[^\w\-\.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '')
      .replace(/^$/, 'a')
      .slice(0,15).replace(/\.$/, '');
  return new_id.length > 2 ? new_id : new_id + new_id[new_id.length - 1].repeat(3 - new_id.length);
}
