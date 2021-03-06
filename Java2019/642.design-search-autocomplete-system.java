// 是用Trie来满足搜索，初始化的时候定义Trie的结构。
// 使用PriorityQueue来满足排序，有个细节就是要用一个
// 全局的prefix的变量记录之前搜索过的字符串。PQ的comparator需要
// 设置如果一样的string，需要比较ascii码。
class AutocompleteSystem {

    class TrieNode {
        Map<Character, TrieNode> children;
        Map<String, Integer> counts;
        
        public TrieNode() {
            children = new HashMap<Character, TrieNode>();
            counts = new HashMap<String, Integer>();
        }
    }
    
    private void add(String s, int count) {
        TrieNode cur = root;
        for(char c: s.toCharArray()) {
            TrieNode next = cur.children.get(c);
            if(next == null) {
                next = new TrieNode();
                cur.children.put(c, next);
            }
            cur = next;
            cur.counts.put(s, cur.counts.getOrDefault(s, 0) + count);
        }
    }
    
    
    private TrieNode root;
    private String prefix;
    
    public AutocompleteSystem(String[] sentences, int[] times) {
        root = new TrieNode();
        prefix = "";
        
        for(int i = 0; i < sentences.length; i++) {
            add(sentences[i], times[i]);
        }
    }
    
    public List<String> input(char c) {
        if(c == '#') { // end of inputs
            add(prefix, 1);
            prefix = "";
            return new ArrayList<String>();
        }
        
        prefix += c;
        TrieNode cur = root;
        for(char pc: prefix.toCharArray()) { // 找到新prefix所对应的TrieNode
            TrieNode next = cur.children.get(pc);
            if(next == null) return new ArrayList<String>(); // 没找到
            cur = next;
        }
        
        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>((a, b) -> (
            a.getValue() == b.getValue() ?
            a.getKey().compareTo(b.getKey()) : // if equal, compare the ascii code
            b.getValue() - a.getValue() // if not equal, max-heap
        ));
        pq.addAll(cur.counts.entrySet()); // 把所有string放进max-heap，顶部是最高频的词
        
        List<String> res = new ArrayList<String>();
        
        for(int k = 0; k < 3 && !pq.isEmpty(); k++) {
            res.add(pq.poll().getKey());
        }
        return res;
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * AutocompleteSystem obj = new AutocompleteSystem(sentences, times);
 * List<String> param_1 = obj.input(c);
 */