function create_updated_collection(collection_a, object_b) {
  let cct = object_b.value;
  for (let item of collection_a) {
    for (let item1 of cct) {
      console.log(item.key);
      console.log(item1);
      if (item.key === item1) {
        if (item.count >= 3) {
          item.count = item.count - parseInt(item.count / 3);
        }
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
