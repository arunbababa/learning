class Node:
    def __init__(self, node_id, address=None):
        """
        ネットワーク内のノードを表すNodeクラス

        :param node_id : ノードの一意の識別し
        :param address : ノードの簡易アドレス
        :param links   : ノードに接続されたリンク
        """
        self.node_id = node_id
        self.address = address
        self.links = []

    def add_link(self, link):
        if link not in self.links:
            self.links.append(link)

    def __str__(self):
        # list内包表記の条件分岐は、接続差ノードについてだけ参照するために必要
        connected_nodes = [link.node_x.node_id if self != link.node_x else link.node_y.node_id for link in self.links]
        connected_nodes_str = ', '.join(map(str, connected_nodes))
        return f"ノード(ID: {self.node_id}, アドレス: {self.address}, 接続: {connected_nodes_str})"

# メモ
# リンクはノード間の接続を表す

class Link:
    def __init__(self, node_x, node_y, bandwidth=10000, delay=0.001, packet_loss=0.0):
        """
        ネットワーク内の2つのノード間のリンクを表すLinkクラス

        :param node_x      : リンクの1方のノード
        :param node_y      : リンクのもう1方のノード
        :param bandwidth   : リンクの帯域幅(データ転送速度) デフォルトは1
        :param delay       : リンクの遅延時間 デフォルトは0
        :param packet_loss : リンクの遅延時間 デフォルトは0.0
        """
        self.node_x = node_x
        self.node_y = node_y
        self.bandwidth = bandwidth
        self.delay = delay
        self.packet_loss = packet_loss

        node_x.add_link(self) # これで各ノードにLinkクラスのインスタンスを入れてLink関係を保存する
        node_y.add_link(self) # 上同様

        # 以下でやっても変わらないかな? TODO
        # self.node_x.add_link(self)
        # self.node_y.add_link(self)

    def __str__(self):
        return f"リンク({self.node_x.node_id} ↔ {self.node_y.node_id}, 帯域幅: {self.bandwidth}, 遅延: {self.delay}, パケットロス率: {self.packet_loss})"
    
# ノード1とノード2をリンクで接続
node1 = Node(node_id=1, address="00:01")
node2 = Node(node_id=2, address="00:02")
link = Link(node1, node2)

print(node1)
print(node2)
print(link)
