import { PageNames } from '../constants';

// previous context allows to pass in ids or params from the last route
export default function genContentLink(id, isLeaf, last, prevContext) {
  return {
    name: isLeaf ? PageNames.TOPICS_CONTENT : PageNames.TOPICS_TOPIC,
    params: { id },
    query: { last: last, prevContext },
  };
}
